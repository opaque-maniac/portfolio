from django.urls import path
from . import views

# Urls for this application
urlpatterns = [
    path('', views.index, name="index"),
    path('about/', views.about, name="about"),
    path('projects/', views.projects, name="projects"),
    path('gallery/', views.gallery, name="gallery"),
]