from django.forms import ModelForm, Textarea
from django.utils.html import strip_tags
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
        
    def clean_product(self):
        product = self.cleaned_data["product"]
        return strip_tags(product)

    def clean_description(self):
        description = self.cleaned_data["description"]
        return strip_tags(description)