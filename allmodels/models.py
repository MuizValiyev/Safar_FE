from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class allProduct(models.Model):
    title = models.CharField(max_length=30)
    image = models.ImageField(upload_to='product/%Y/%m/%d/',blank=True)
    price = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)


    class Meta:
        ordering = ['category']
    
    def __str__(self):
        return self.title
    
