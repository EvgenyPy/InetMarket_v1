from django.contrib import admin

from .models import (Review, Category, Notebook,
                     Smartphone, Watch, Headphones,
                     Processor, Ram, Display, OperatingSystem,
                     Camera, OperatingSystemPhone, Color,
                     DisplayWatch, SpecificWatch, SpecificHeadphones)


@admin.register(SpecificHeadphones)
class SpecificHeadphonesAdmin(admin.ModelAdmin):
    list_display = ('signal_method', 'typ_construction', 'sound_circuit_format')
    list_filter = ('signal_method', 'typ_construction', 'sound_circuit_format')
    search_fields = ('signal_method', 'typ_construction', 'sound_circuit_format')


@admin.register(SpecificWatch)
class SpecificWatchAdmin(admin.ModelAdmin):
    list_display = ('watertightness',)
    list_filter = ('watertightness',)
    search_fields = ('watertightness',)


@admin.register(DisplayWatch)
class DisplayWatchAdmin(admin.ModelAdmin):
    list_display = ('diagonal', 'resolution', 'typ_of_display', 'touch_screen')
    list_filter = ('diagonal', 'resolution', 'typ_of_display', 'touch_screen')
    search_fields = ('diagonal', 'resolution', 'typ_of_display', 'touch_screen')


@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ('color_name', 'color_hex_code')
    list_filter = ('color_name', 'color_hex_code')
    search_fields = ('color_name', 'color_hex_code')


@admin.register(Processor)
class ProcessorAdmin(admin.ModelAdmin):
    list_display = ('processor_name', 'number_of_cores', 'cpu_frequency')
    list_filter = ('processor_name', 'number_of_cores', 'cpu_frequency')
    search_fields = ('processor_name', 'number_of_cores', 'cpu_frequency')


@admin.register(Ram)
class RamAdmin(admin.ModelAdmin):
    list_display = ('ram_memory', 'ram_frequency', 'ram_type')
    list_filter = ('ram_memory', 'ram_frequency', 'ram_type')
    search_fields = ('ram_memory', 'ram_frequency', 'ram_type')


@admin.register(Display)
class DisplayAdmin(admin.ModelAdmin):
    list_display = ('diagonal', 'resolution', 'typ_of_display')
    list_filter = ('diagonal', 'resolution', 'typ_of_display')
    search_fields = ('diagonal', 'resolution', 'typ_of_display')


@admin.register(OperatingSystem)
class OperatingSystemAdmin(admin.ModelAdmin):
    list_display = ('operating_system',)
    list_filter = ('operating_system',)
    search_fields = ('operating_system',)


@admin.register(OperatingSystemPhone)
class OperatingSystemPhoneAdmin(admin.ModelAdmin):
    list_display = ('operating_system', 'version_os')
    list_filter = ('operating_system', 'version_os')
    search_fields = ('operating_system', 'version_os')


@admin.register(Camera)
class CameraAdmin(admin.ModelAdmin):
    list_display = ('megapixel', 'numbers_of_cameras')
    list_filter = ('megapixel', 'numbers_of_cameras')
    search_fields = ('megapixel', 'numbers_of_cameras')


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('text', 'author', 'product', 'created_at')
    list_filter = ('author', 'product', 'created_at')
    search_fields = ('text', 'author', 'product')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    list_filter = ('name', 'slug')
    search_fields = ('name', 'slug')


@admin.register(Notebook)
class NotebookAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'category')
    list_filter = ('name', 'slug', 'category')
    search_fields = ('name', 'slug', 'category')


@admin.register(Smartphone)
class SmartphoneAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'category')
    list_filter = ('name', 'slug', 'category')
    search_fields = ('name', 'slug', 'category')


@admin.register(Watch)
class WatchAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'category')
    list_filter = ('name', 'slug', 'category')
    search_fields = ('name', 'slug', 'category')


@admin.register(Headphones)
class HeadphonesAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'category')
    list_filter = ('name', 'slug', 'category')
    search_fields = ('name', 'slug', 'category')