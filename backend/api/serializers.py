import base64
from django.contrib.auth import get_user_model
from django.core.validators import EmailValidator
from rest_framework import serializers
from django.core.files.base import ContentFile
from products.models import (Product, Review, ShopingCart,
                             Category, Notebook, Smartphone,
                             Watch, Headphones)

User = get_user_model()


class Base64ImageField(serializers.ImageField):
    """
    Кастомный сериализатор для обработки Base64-строки
    """

    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            format, imgstr = data.split(';base64,')
            ext = format.split('/')[-1]
            data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)

        return super().to_internal_value(data)


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(validators=
                    [EmailValidator(message="Enter a valid email address.")])
    avatar = Base64ImageField(required=False, allow_null=True)

    class Meta:
        model = User
        fields = ['email',
                  'first_name',
                  'last_name',
                  'number_phone',
                  'avatar',
                  'id']

    def validate(self, attrs):
        email = attrs.get('email')
        number_phone = attrs.get('number_phone')

        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError({'email': 'Email already exists'})
        if User.objects.filter(number_phone=number_phone).exists():
            raise serializers.ValidationError({'number_phone': 'Number phone already exists'})
        return attrs


class UserSetAvatarSerializer(serializers.ModelSerializer):
    avatar = Base64ImageField()

    class Meta:
        model = User
        fields = ['avatar',]


class ReviewSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(
        read_only=True,
    )
    review = serializers.StringRelatedField(
        read_only=True
    )

    def validate(self, data):
        if self.context['request'].method == 'POST':
            request = self.context['request']
            user = request.user
            if Review.objects.filter(author=user, product=data['product']).exists():
                raise serializers.ValidationError('Вы уже оставляли отзыв на этот продукт')
        return data

    class Meta:
        model = Review
        fields = ['id', 'text', 'author', 'product', 'created_at']


class ProductSerializer(serializers.ModelSerializer):

    def price_calculation(self):
        price_before_discount = self.instance.price_before_discount
        discount = self.instance.discount
        price_after_discount = self.instance.price_after_discount
        if discount not in [None, 0]:
            price_after_discount = price_before_discount - discount
        return price_after_discount

    class Meta:
        model = Product
        fields = ['__all__']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'slug']


class ShopingCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopingCart
        fields = ['__all__']


class NotebookSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Notebook
        fields = ['__all__']


class SmartphoneSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Smartphone
        fields = ['__all__']


class WatchSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Watch
        fields = ['__all__']


class HeadphonesSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Headphones
        fields = ['__all__']
