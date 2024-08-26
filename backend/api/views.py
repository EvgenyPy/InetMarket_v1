from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework import filters, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from . import serializers
from .pagination import CustomPagination
from .filters import WatchFilter, HeadphonesFilter, NotebookFilter, SmartphoneFilter
from products.models import (Product, Review, ShopingCart,
                             Category, Notebook, Smartphone,
                             Watch, Headphones, ShopingCart)


User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

    @action(detail=False, methods=['get'])
    def me(self, request):
        user = request.user
        serializer = serializers.UserSerializer(user)
        return Response(serializer.data)

    @action(detail=False, methods=['put', 'delete'], url_path='me/avatar',)
    def set_avatar(self, request):
        user = request.user
        if request.method == 'PUT':
            if request.data.get('avatar') is None:
                return Response(status=status.HTTP_400_BAD_REQUEST)
            serializer = serializers.UserSetAvatarSerializer(user, data=request.data,
                                                             partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data,
                                status=status.HTTP_200_OK)
            if request.body is None:
                return Response(serializer.errors,
                                status=status.HTTP_400_BAD_REQUEST)
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)
        if request.method == 'DELETE':
            user.avatar = None
            user.save()
            return Response(status=status.HTTP_204_NO_CONTENT)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = serializers.CategorySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'slug']
    pagination_class = CustomPagination


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = serializers.ReviewSerializer
    pagination_class = CustomPagination
    permission_classes = [IsAuthenticated]
#    http_method_names = ['get', 'post', 'patch', 'delete']

    def get_product(self):
        product_id = self.request.data.get('product_id')
        product = get_object_or_404(Product, id=product_id)
        return product

    def perform_create(self, serializer):
        product_id = self.request.data.get('product_id')
        product = Product.objects.get(id=product_id)
        serializer.save(author=self.request.user, product=product)

    def get_queryset(self):
        return Review.objects.filter(product__in=Product.objects.all())


class CategoryList(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = serializers.CategorySerializer(categories, many=True)
        return Response(serializer.data)


class ProductListViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductSerializer
    pagination_class = CustomPagination


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    pagination_class = CustomPagination

    def get_serializer_class(self):
        product_id = self.kwargs['pk']
        product = self.get_queryset().filter(id=product_id).first()
        if isinstance(product, Notebook):
            return serializers.NotebookSerializer
        elif isinstance(product, Headphones):
            return serializers.HeadphonesSerializer
        elif isinstance(product, Watch):
            return serializers.WatchSerializer
        elif isinstance(product, Smartphone):
            return serializers.SmartphoneSerializer
        else:
            raise NotImplementedError("Неизвестный тип продукта")

    def get_filter_backends(self):
        product_id = self.kwargs['pk']
        product = self.get_queryset().filter(id=product_id).first()
        if isinstance(product, Notebook):
            return [NotebookFilter]
        elif isinstance(product, Headphones):
            return [HeadphonesFilter]
        elif isinstance(product, Watch):
            return [WatchFilter]
        elif isinstance(product, Smartphone):
            return [SmartphoneFilter]
        else:
            raise NotImplementedError("Неизвестный тип продукта")

    @action(detail=True, methods=['get', 'post', 'delete'],
            permission_classes=[IsAuthenticated])
    def get_in_shopping_cart(self, request, pk=None):
        product_id = self.kwargs.get('pk')
        if product_id is None:
            return Response({'message': 'Product ID not provided'},
                            status=status.HTTP_400_BAD_REQUEST)
        user = request.user
        if not user.is_authenticated:
            return Response({'message': 'User is not authenticated'},
                            status=status.HTTP_403_FORBIDDEN)
        try:
            shopping_cart = ShopingCart.objects.get(user=user, product_id=product_id)
            product = shopping_cart.product
            if product is None:
                return Response({'message': 'Product not found in shopping cart'},
                                status=status.HTTP_404_NOT_FOUND)
            serializer = self.get_serializer(product)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ShopingCart.DoesNotExist:
            return Response({'message': 'Product not found in shopping cart'},
                            status=status.HTTP_404_NOT_FOUND)
