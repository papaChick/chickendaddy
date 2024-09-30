from django.forms import ModelForm, Textarea
from main.models import Product

class ProductForm(ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'price', 'description']
        widgets = {
            'description': Textarea(attrs={
                'rows': 1, 
                'style': 'resize:none; overflow:hidden;', 
                'class': 'auto-grow-textarea',
            }),
        }