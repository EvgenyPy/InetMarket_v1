from django.urls import path
from .views import *

urlpatterns = [
    path('products/', ProductListViewSet.as_view({'get': 'list'}), name='products'),
    path('products/<int:pk>/', ProductViewSet.as_view({'get': 'retrieve'}), name='product'),
    path('categories/', CategoryList.as_view(), name='categories'),
    path('reviews/', ReviewViewSet.as_view({'get': 'list'}), name='reviews'),
    path('reviews/<int:pk>/', ReviewViewSet.as_view({'get': 'retrieve'}), name='review'),
]
