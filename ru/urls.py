from django.urls import path
from .views import home, catalog, shopper, bag, organizer, backpack, umra, cosmeticBag, giftBag, envelopesForBooks, search_results




urlpatterns = [
    path('', home, name='home'),
    path('products/', catalog, name='catalog'),
    path('products/shoppers/', shopper, name='shopper'),
    path('products/bags/', bag, name='bag'),
    path('products/organizer/', organizer, name='organizer'),
    path('products/backpack/', backpack, name='backpack'),
    path('products/umra/', umra, name='umra'),
    path('products/cosmeticBag/', cosmeticBag, name='cosmeticBag'),
    path('products/giftBag/', giftBag, name='giftBag'),
    path('products/envelopesForBooks/', envelopesForBooks, name='envelopesForBooks'),
    path('results', search_results, name='search_results'),
]