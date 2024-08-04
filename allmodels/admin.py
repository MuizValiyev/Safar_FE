from django.contrib import admin
from .models import allProduct, Category


class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'price')
    list_filter = ('category',)
    ordering = ('category', 'title')  


admin.site.register(allProduct,ProductAdmin)
admin.site.register(Category)