from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Category(models.Model):
    """
    Модель категории
    """
    name = models.CharField(max_length=100, verbose_name='Название категории')
    slug = models.SlugField(max_length=100,
                            verbose_name='Слаг', unique=True)

    class Meta:
        ordering = ['name']
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name


class Brand(models.Model):
    """
    Модель бренда
    """
    name = models.CharField(max_length=100, verbose_name='Название')

    class Meta:
        verbose_name = 'Бренд'
        verbose_name_plural = 'Бренды'

    def __str__(self):
        return self.name


class Color(models.Model):
    """
    Модель цвета
    """
    color_name = models.CharField(max_length=100, verbose_name='Название цвета')
    color_hex_code = models.CharField(max_length=100, verbose_name='Цвет')

    class Meta:
        verbose_name = 'Цвет'
        verbose_name_plural = 'Цвета'

    def __str__(self):
        return self.color_name


class Product(models.Model):
    """
    Общая модель продукта
    """
    name = models.CharField(max_length=100, verbose_name='Название')
    brand = models.ForeignKey('Brand',
                              on_delete=models.SET_NULL,
                              null=True, blank=True,
                              verbose_name='Бренд')
    color = models.ForeignKey('Color',
                              on_delete=models.SET_NULL,
                              null=True, blank=True,
                              verbose_name='Цвет')
    description = models.TextField(verbose_name='Описание')
    price_before_discount = models.PositiveIntegerField(
                                    verbose_name='Цена до скидки')
    discount = models.PositiveIntegerField(null=True, blank=True,
                                           verbose_name='Скидка')
    price_after_discount = models.PositiveIntegerField(
                                    null=True, blank=True,
                                    verbose_name='Цена со скидкой',
                                    default=price_before_discount)
    image = models.ImageField(upload_to='products/images',
                              null=True, blank=True,
                              verbose_name='Изображение')
    year_release = models.IntegerField(null=True, blank=True,
                                       verbose_name='Год выпуска')
    slug = models.SlugField(max_length=100, verbose_name='Ссылка')
    category = models.ForeignKey('Category',
                                 on_delete=models.SET_NULL,
                                 null=True, blank=True,
                                 verbose_name='Категория')

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'
        ordering = ['name']

    def __str__(self):
        return self.name


class Processor(models.Model):
    """
    Модель процессора
    """
    processor_name = models.CharField(max_length=100, verbose_name='Название')
    number_of_cores = models.IntegerField(verbose_name='Количество ядер')
    cpu_frequency = models.FloatField(verbose_name='Частота процессора')

    class Meta:
        verbose_name = 'Процессор'
        verbose_name_plural = 'Процессоры'

    def __str__(self):
        return self.processor_name


class Ram(models.Model):
    ram_memory = models.IntegerField(verbose_name='Объем оперативной памяти')
    ram_frequency = models.FloatField(verbose_name='Частота оперативной памяти')
    ram_type = models.CharField(max_length=100,
                                verbose_name='Тип оперативной памяти')

    class Meta:
        verbose_name = 'Оперативная память'
        verbose_name_plural = 'Оперативная память'

    def __str__(self):
        return self.ram_memory


class Display(models.Model):
    """
    Модель дисплея
    """
    diagonal = models.FloatField(verbose_name='Диагональ')
    resolution = models.IntegerField(verbose_name='Разрешение экрана')
    typ_of_display = models.CharField(max_length=100,
                                      verbose_name='Тип дисплея')

    class Meta:
        verbose_name = 'Дисплей'
        verbose_name_plural = 'Дисплеи'

    def __str__(self):
        return self.diagonal


class OperatingSystem(models.Model):
    """
    Модель операционной системы
    """
    operating_system = models.CharField(max_length=100, verbose_name='Название')

    class Meta:
        verbose_name = 'Операционная система'
        verbose_name_plural = 'Операционные системы'

    def __str__(self):
        return self.operating_system


class Notebook(Product):
    """
    Модель ноутбука
    """
    processor = models.ForeignKey(Processor, on_delete=models.CASCADE,
                                  verbose_name='Процессор')
    ram = models.ForeignKey(Ram, on_delete=models.CASCADE,
                            verbose_name='Оперативная память')

    keyboard_illuminated = models.BooleanField(
        verbose_name='Подсветка клавиатуры')
    display = models.ForeignKey(Display, on_delete=models.CASCADE,
                                verbose_name='Экран')
    video_card = models.CharField(max_length=100, verbose_name='Видеокарта')
    battery = models.IntegerField(verbose_name='Емкость аккумулятора')
    battery_life = models.IntegerField(verbose_name='Время автономной работы')
    web_cam = models.CharField(max_length=100, verbose_name='Веб камера')
    operating_system = models.ForeignKey(OperatingSystem,
                                         on_delete=models.CASCADE,
                                         verbose_name='Операционная система')
    weight = models.FloatField(verbose_name='Вес')
    gaming_laptop = models.CharField(max_length=100,
                                     verbose_name='Гейминг лаптоп')
    product = models.ForeignKey(Product, on_delete=models.CASCADE,
                                verbose_name='Страна производства',
                                related_name='notebookss',
                                blank=True, null=True)

    class Meta:
        verbose_name = 'Ноутбук'
        verbose_name_plural = 'Ноутбуки'

    def __str__(self):
        return self.name
############################################################################


class Camera(models.Model):
    megapixel = models.IntegerField(verbose_name='Мегапиксели')
    numbers_of_cameras = models.IntegerField(verbose_name='Количество камер')

    class Meta:
        verbose_name = 'Камера'
        verbose_name_plural = 'Камеры'

    def __str__(self):
        return self.megapixel


class OperatingSystemPhone(models.Model):
    operating_system = models.CharField(max_length=100, verbose_name='Название')
    version_os = models.CharField(
                                max_length=100,
                                verbose_name='Версия операционной системы')

    class Meta:
        verbose_name = 'Операционная система'
        verbose_name_plural = 'Операционные системы'

    def __str__(self):
        return self.operating_system


class Smartphone(Product):
    """
    Модель смартфона
    """
    camera = models.ForeignKey(Camera, on_delete=models.CASCADE,
                               verbose_name='Камера')
    nfc = models.CharField(max_length=100, verbose_name='NFC')
    sim_card = models.CharField(max_length=100,
                                verbose_name='Количество SIM-карт')
    memory_capacity = models.IntegerField(verbose_name='Объем памяти')
    display = models.ForeignKey(Display, on_delete=models.CASCADE,
                                verbose_name='Экран')
    operating_system = models.ForeignKey(OperatingSystemPhone,
                                         on_delete=models.CASCADE,
                                         verbose_name='Операционная система')
    processor = models.ForeignKey(Processor, on_delete=models.CASCADE,
                                  verbose_name='Процессор')
    ram = models.ForeignKey(Ram, on_delete=models.CASCADE,
                            verbose_name='Оперативная память')
    battery = models.IntegerField(verbose_name='Емкость аккумулятора')
    product = models.ForeignKey(Product, on_delete=models.CASCADE,
                                verbose_name='Страна производства',
                                related_name='smartphoness',
                                blank=True, null=True)

    class Meta:
        verbose_name = 'Смартфон'
        verbose_name_plural = 'Смартфоны'

    def __str__(self):
        return self.name
#############################################################################


class DisplayWatch(models.Model):
    diagonal = models.FloatField(verbose_name='Диагональ')
    resolution = models.IntegerField(verbose_name='Разрешение экрана')
    typ_of_display = models.CharField(max_length=100,
                                      verbose_name='Тип дисплея',
                                      help_text='Цветной или нет')
    touch_screen = models.CharField(max_length=100,
                                    verbose_name='Сенсорный дисплей',
                                    help_text='да/нет')

    class Meta:
        verbose_name = 'Диагональ экрана'
        verbose_name_plural = 'Диагонали экранов'

    def __str__(self):
        return self.diagonal


class SpecificWatch(models.Model):
    """
    Модель характеристик часов
    """
    watertightness = models.CharField(max_length=100,
                                      verbose_name='Водонепроницаемость',
                                      help_text='да/нет')

    class Meta:
        verbose_name = 'Характеристики часов'
        verbose_name_plural = 'Характеристики часов'

    def __str__(self):
        return self.watertightness


class Watch(Product):
    """
    Модель часов
    """
    case_material = models.CharField(max_length=100,
                                     verbose_name='Материал корпуса')
    watertightness = models.ForeignKey(SpecificWatch, on_delete=models.CASCADE,
                                       verbose_name='Водонепроницаемость')
    display = models.ForeignKey(DisplayWatch, on_delete=models.CASCADE,
                                verbose_name='Экран')
    form_factor = models.CharField(max_length=100,
                                   verbose_name='Форма часов')
    battery_life = models.IntegerField(verbose_name='Время автономной работы')
    weight = models.FloatField(verbose_name='Вес')
    operating_system = models.CharField(max_length=100,
                                        verbose_name='Операционная система')
    product = models.ForeignKey(Product, on_delete=models.CASCADE,
                                verbose_name='Страна производства',
                                related_name='watchess',
                                blank=True, null=True)

    class Meta:
        verbose_name = 'Часы'
        verbose_name_plural = 'Часы'

    def __str__(self):
        return self.name
#############################################################################


class SpecificHeadphones(models.Model):
    """
    Модель характеристик гарнитуры
    """
    signal_method = models.CharField(max_length=100,
                                     verbose_name='Способ передачи сигнала')
    typ_construction = models.CharField(max_length=100,
                                        verbose_name='Тип конструкции')
    sound_circuit_format = models.CharField(max_length=100,
                                            verbose_name='Формат звуковой схемы')

    class Meta:
        verbose_name = 'Характеристики гарнитуры'
        verbose_name_plural = 'Характеристики гарнитур'

    def __str__(self):
        return self.signal_method, self.typ_construction, self.sound_circuit_format


class Headphones(Product):
    """
    Модель гарнитуры
    """
    specific_headphones = models.ForeignKey(SpecificHeadphones,
                                            on_delete=models.CASCADE,
                                            verbose_name='Характеристики')
    microphone = models.CharField(max_length=100,
                                  verbose_name='Микрофон')
    gaming_headphones = models.CharField(max_length=100,
                                         verbose_name='Гейминг гарнитуры')
    illumination = models.CharField(max_length=100,
                                    verbose_name='Подсветка')
    sensitivity = models.CharField(max_length=100,
                                   verbose_name='Чувствительность')
    min_frequency = models.IntegerField(verbose_name='Минимальная частота')
    max_frequency = models.IntegerField(verbose_name='Максимальная частота')
    connector_for_connection = models.CharField(
                                    max_length=100,
                                    verbose_name='Коннектор для подключения')
    active_noise_reduction = models.CharField(
                                    max_length=100,
                                    verbose_name='Активное уменьшение шума')
    cable_length = models.IntegerField(verbose_name='Длина кабеля')
    product = models.ForeignKey(Product, on_delete=models.CASCADE,
                                verbose_name='Страна производства',
                                related_name='headphoness',
                                blank=True, null=True)

    class Meta:
        verbose_name = 'Гарнитура'
        verbose_name_plural = 'Гарнитуры'

    def __str__(self):
        return self.name


class Review(models.Model):
    """
    Модель отзыва
    """
    text = models.TextField(verbose_name='Текст', max_length=1000)
    author = models.ForeignKey(User, on_delete=models.CASCADE,
                               verbose_name='Автор')
    product = models.ForeignKey(Product, on_delete=models.CASCADE,
                                verbose_name='Товар')
    created_at = models.DateTimeField(auto_now_add=True,
                                      verbose_name='Создано')

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'
        ordering = ['-created_at']

    def __str__(self):
        return self.text


class ShopingCart(models.Model):
    """
    Модель корзины
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE,
                                verbose_name='Пользователь')
    product = models.ForeignKey(Product, on_delete=models.CASCADE,
                                verbose_name='Товар')

    class Meta:
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзины'

    def __str__(self):
        return self.user
