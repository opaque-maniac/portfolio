from django.shortcuts import render

# Views for this app
def index(request):
    return render(request, 'portfolio/index.html')

def about(request):
    return render(request, 'portfolio/about.html')

def projects(request):
    return render(request, 'portfolio/projects.html')

def gallery(request):
    return render(request, 'portfolio/gallery.html')