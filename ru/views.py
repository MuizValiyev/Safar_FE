from django.shortcuts import render
from allmodels.models import allProduct, Category
from fuzzywuzzy import fuzz
from unidecode import unidecode
from django.core.paginator import Paginator


def search_results(request):
    search = request.GET.get('search', '')
    results = []


    if search:
        normalized_query = unidecode(search).lower()
        categories = Category.objects.all()
        matching_categories = []

        for category in categories:
            normalized_category_name = unidecode(category.name).lower()
            match_ratio = fuzz.partial_ratio(normalized_query, normalized_category_name)
            if match_ratio > 70:
                matching_categories.append(category)

        results = allProduct.objects.filter(category__in=matching_categories).order_by('-date')
    return render(request, 'ru/search_results.html', {'products': results, 'search': search})



def home(request):
    allItems = allProduct.objects.all().order_by('-date')[:12]
    return render(request, 'ru/index.html', {'allItems':allItems})


def catalog(request):
    allItems = allProduct.objects.all().order_by('-date')
    return render(request, 'ru/allProductTemplates/catalog.html', {'allItems':allItems})

def shopper(request):
    shopper = Category.objects.get(name='Шопперы')
    allshopper = allProduct.objects.filter(category=shopper).order_by('-date')
    return render(request, 'ru/allProductTemplates/shopper.html', {'allshopper':allshopper})

def bag(request):
    bag = Category.objects.get(name='Сумки')
    allbag = allProduct.objects.filter(category=bag).order_by('-date')
    return render(request, 'ru/allProductTemplates/sumka.html', {'allbag':allbag})

def organizer(request):
    organizer = Category.objects.get(name='Органайзеры')
    allorganizer = allProduct.objects.filter(category=organizer).order_by('-date')
    return render(request, 'ru/allProductTemplates/organizer.html', {'allorganizer':allorganizer})

def backpack(request):
    backpack = Category.objects.get(name='Рюкзаки')
    allbackpack = allProduct.objects.filter(category=backpack).order_by('-date')
    return render(request, 'ru/allProductTemplates/backpack.html', {'allbackpack':allbackpack})

def umra(request):
    umra = Category.objects.get(name='Умра Safari')
    allUmra = allProduct.objects.filter(category=umra).order_by('-date')
    return render(request, 'ru/allProductTemplates/umra.html', {'allUmra':allUmra})

def cosmeticBag(request):
    cosmeticBag = Category.objects.get(name='Косметички')
    allCosmeticBag = allProduct.objects.filter(category=cosmeticBag).order_by('-date')
    return render(request, 'ru/allProductTemplates/cosmeticBag.html', {'allCosmeticBag':allCosmeticBag})

def giftBag(request):
    giftBag = Category.objects.get(name='Подарочные Мешочки')
    allGiftBag = allProduct.objects.filter(category=giftBag).order_by('-date')
    return render(request, 'ru/allProductTemplates/giftBag.html', {'allGiftBag':allGiftBag})

def envelopesForBooks(request):
    envelopesForBooks = Category.objects.get(name='Конверты Для Книг')
    allenvelopesForBooks = allProduct.objects.filter(category=envelopesForBooks).order_by('-date')
    return render(request, 'ru/allProductTemplates/envelopesForBooks.html', {'allenvelopesForBooks':allenvelopesForBooks})
