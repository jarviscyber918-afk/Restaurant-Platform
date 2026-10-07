/**
 * CHAR | تشار — NEO-BRUTALIST BISTRO & WOOD-FIRED GRILL ENGINE
 * High-Contrast Stone & Carbon Palette, Dual DZD/EUR Pricing & WhatsApp Commerce
 */

// ==========================================================================
// 1. CONFIGURATION & STATE
// ==========================================================================
const APP_CONFIG = Object.freeze({
  WHATSAPP_PHONE: '213550123456',
  STORAGE_CART_KEY: 'char_bistro_cart',
  STORAGE_LANG_KEY: 'char_bistro_lang',
  EUR_EXCHANGE_RATE: 148.5, // 1 EUR ≈ 148.5 DZD
  CURRENCY_EN: 'DZD',
  CURRENCY_AR: 'دج'
});

// ==========================================================================
// 2. BILINGUAL TRANSLATION CORE (EN & AR)
// ==========================================================================
const TRANSLATIONS = Object.freeze({
  en: Object.freeze({
    // Brand & Header
    brand_name: 'CHAR',
    nav_home: 'Home',
    nav_menu: 'Menu',
    nav_story: 'Story & Craft',
    nav_reservation: 'Reservations',
    nav_contact: 'Location & Hours',
    btn_book_table: 'Book Table',
    header_tray: 'Order Tray',
    lang_toggle_text: 'العربية',
    drawer_lang_text: 'Switch to العربية',

    // Hero Section
    hero_tagline_top: 'EST. 2026 • HYDRA, ALGER',
    hero_main_title: 'WOOD-FIRED<br />STEAKS & WAGYU.',
    hero_sub_title: "IT'S REAL AND IT'S DELICIOUS.",
    hero_photo1_caption: '45-DAY DRY-AGED TOMAHAWK',
    hero_photo2_caption: 'OPEN HEARTH DINING • HYDRA',
    hero_mission_text: 'We cook over 950°C natural oak embers. Certified BMS 11+ Japanese Wagyu, 45-day Himalayan salt dry-aged beef, smashed butter burgers, and unpretentious communal dining. No shortcuts, just real fire.',
    btn_reserve_hero: 'Reserve a Table',
    btn_explore_menu: 'Explore Menu',

    // Story & Philosophy
    story_section_label: 'OUR PHILOSOPHY',
    story_heading: '<span class="leading-tight">TRANSFORMED BY</span> <span class="text-blue-600 border-b-2 border-blue-600 inline-block w-fit pb-1 leading-tight">PITMASTERS</span> <span class="leading-tight pt-1">OVER RAW FIRE.</span>',
    story_p1: 'At CHAR, we stripped away the fuss of traditional dining. We source the finest BMS 11+ Japanese Miyazaki beef and locally raised prime cattle, aging them for 45 days in temperature-controlled pink salt chambers.',
    story_p2: 'Every cut meets the scorching 950°C heat of seasoned Algerian white oak wood. The result is a glass-like caramelized crust, a tender rose core, and pure woodsmoke depth.',
    metric_1: 'Open Hearth Heat',
    metric_2: 'Himalayan Salt Aging',
    metric_3: 'Halal & Pure Fire',
    story_photo_caption: 'RAW CUTS • 100% WOOD-FIRED EMBERS',
    btn_story_cta: 'Explore Our Cuts',

    // Menu Section
    menu_section_label: 'CURRENT SPECIALTIES',
    menu_heading: 'THE FOOD & DRINKS',
    menu_lead: 'Select your cuts, burgers, and wood-fired sides. Adjust portion quantities with steppers and dispatch straight to our WhatsApp kitchen.',
    cat_all: 'All Items',
    cat_steaks: 'Prime Steaks',
    cat_wagyu: 'Wagyu Burgers',
    cat_sides: 'Wood-Fired Sides',
    cat_drinks: 'Drinks & Desserts',
    search_placeholder: 'Search steaks, burgers, sides (e.g. Ribeye, Wagyu, Truffle)...',
    btn_add_tray: '+ Add to Tray',
    btn_in_tray: 'In Tray',
    no_results_t: 'No items match your search',
    no_results_d: 'Try typing another ingredient or resetting the category filter.',
    btn_reset_filters: 'Reset Filters',

    // Reservation Suite
    res_section_label: 'ONLINE RESERVATION',
    res_heading: 'SECURE YOUR TABLE AT CHAR',
    res_lead: 'Direct table booking with instant WhatsApp concierge confirmation. No waiting lines.',
    lbl_party_size: '1. Number of Guests *',
    lbl_seating_area: '2. Seating Zone *',
    lbl_res_date: '3. Date *',
    lbl_res_time: '4. Time Slot *',
    lbl_guest_name: '5. Full Name *',
    lbl_whatsapp_phone: '6. WhatsApp Phone Number *',
    lbl_special_requests: '7. Notes & Dietary Preferences',
    btn_confirm_res_whatsapp: 'Confirm Reservation via WhatsApp',

    // Location & Hours
    loc_title_address: 'LOCATION',
    loc_title_hours: 'SERVICE HOURS',
    loc_title_contact: 'DIRECT CONTACT',

    // Footer
    footer_col1_title: 'BUSINESS HOURS',
    footer_col2_title: 'LOCATION',
    footer_col3_title: 'SITEMAP',
    footer_col4_title: 'CONNECT WITH US',

    // Cart Drawer
    cart_drawer_title: 'YOUR ORDER TRAY',
    empty_cart_t: 'Your Tray is Empty',
    empty_cart_d: 'Add prime steaks, Wagyu burgers, and sides to initiate your WhatsApp order.',
    cart_guest_heading: 'Guest & Order Details',
    type_dine_in: 'Dine-In Table',
    type_takeaway: 'Takeaway / Delivery',
    lbl_table_num: 'Table Number (If Seated)',
    lbl_chef_instructions: 'Kitchen Preparation Notes',
    subtotal_lbl: 'Subtotal',
    total_lbl: 'Grand Total',
    btn_send_order_whatsapp: 'Send Order via WhatsApp',
    btn_clear_cart: 'Clear All Items',

    // Mobile Tabs
    tab_home: 'Home',
    tab_menu: 'Menu',
    tab_book: 'Book',
    tab_tray: 'Order',

    // Toasts
    toast_item_added: 'Added to your order tray',
    toast_item_removed: 'Removed from order',
    toast_tray_cleared: 'Order tray cleared',
    toast_form_required: 'Please fill in your Name and WhatsApp phone number.'
  }),

  ar: Object.freeze({
    // Brand & Header
    brand_name: 'تشار',
    nav_home: 'الرئيسية',
    nav_menu: 'القائمة',
    nav_story: 'عن المطعم',
    nav_reservation: 'الحجوزات',
    nav_contact: 'الموقع والمواعيد',
    btn_book_table: 'حجز طاولة',
    header_tray: 'الطلب',
    lang_toggle_text: 'English',
    drawer_lang_text: 'التحويل إلى English',

    // Hero Section
    hero_tagline_top: 'تأسس 2026 • حيدرة، الجزائر',
    hero_main_title: 'ستيك وواغيو<br />على نار الحطب.',
    hero_sub_title: 'طبيعي ١٠٠٪ وبقمة اللذة.',
    hero_photo1_caption: 'توماهوك معتق 45 يوماً',
    hero_photo2_caption: 'شواء على الفحم المفتوح • حيدرة',
    hero_mission_text: 'نطهو على جمر خشب السنديان الطبيعي بحرارة 950°م. واغيو ياباني معتمد BMS 11+، لحوم معتقة 45 يوماً في غرف ملح الهيمالايا، وبرغر الزبدة المكرمل، وتجربة ضيافة حقيقية بدون تعقيد.',
    btn_reserve_hero: 'حجز طاولة',
    btn_explore_menu: 'استكشاف القائمة',

    // Story & Philosophy
    story_section_label: 'فلسفتنا في الطهي',
    story_heading: '<span class="leading-tight">فنون طهي متقنة</span> <span class="text-blue-600 border-b-2 border-blue-600 inline-block w-fit pb-1 leading-tight">بأيدي طهاة محترفين</span> <span class="leading-tight pt-1">على لهيب الجمر.</span>',
    story_p1: 'في تشار، جردنا تجربة الستيك من التكلف لنركز على جوهر النكهة. نستورد أجود لحوم واغيو ميازاكي اليابانية واللحوم المحلية الممتازة، ونعتقها 45 يوماً في غرف ملح الهيمالايا الوردي.',
    story_p2: 'كل قطعة لحم تلامس حرارة 950°م المشتعلة بحطب السنديان الجزائري، لتنتج قشرة مكرملة مقرمشة مع قلب وردي طري ونكهة تدخين عميقة.',
    metric_1: 'حرارة فرن الحطب',
    metric_2: 'أيام التعتيق الملحي',
    metric_3: 'حلال ونار طبيعية 100%',
    story_photo_caption: 'قطع لحم طازجة • جمر الحطب الطبيعي',
    btn_story_cta: 'استكشف قطع اللحم',

    // Menu Section
    menu_section_label: 'المختارات الحالية',
    menu_heading: 'المأكولات والمشروبات',
    menu_lead: 'اختر شرائح اللحم، البرغر والأطباق الجانبية. حدد الكميات وأرسل طلبك مباشرة إلى مطبخنا عبر واتساب.',
    cat_all: 'الكل',
    cat_steaks: 'شرائح الستيك',
    cat_wagyu: 'برغر الواغيو',
    cat_sides: 'أطباق الحطب الجانبية',
    cat_drinks: 'المشروبات والحلويات',
    search_placeholder: 'ابحث عن طبق (مثل: ريب آي، واغيو، كمأة)...',
    btn_add_tray: '+ أضف للطلب',
    btn_in_tray: 'في الطلب',
    no_results_t: 'لا توجد أطباق تطابق بحثك',
    no_results_d: 'يرجى تجربة كلمة بحث أخرى أو إعادة تعيين التصنيف.',
    btn_reset_filters: 'إعادة تعيين',

    // Reservation Suite
    res_section_label: 'حجز طاولة أونلاين',
    res_heading: 'احجز طاولتك في تشار',
    res_lead: 'حجز مباشر وفوري مع تأكيد سريع عبر واتساب كونسيرج.',
    lbl_party_size: '1. عدد الضيوف *',
    lbl_seating_area: '2. منطقة الجلوس *',
    lbl_res_date: '3. التاريخ *',
    lbl_res_time: '4. الوقت *',
    lbl_guest_name: '5. الاسم الكامل *',
    lbl_whatsapp_phone: '6. رقم الواتساب *',
    lbl_special_requests: '7. ملاحظات وتفضيلات خاصة',
    btn_confirm_res_whatsapp: 'تأكيد الحجز عبر واتساب',

    // Location & Hours
    loc_title_address: 'العنوان',
    loc_title_hours: 'مواعيد الخدمة',
    loc_title_contact: 'التواصل المباشر',

    // Footer
    footer_col1_title: 'ساعات العمل',
    footer_col2_title: 'الموقع',
    footer_col3_title: 'روابط سريعة',
    footer_col4_title: 'تواصل معنا',

    // Cart Drawer
    cart_drawer_title: 'صينية الطلبات',
    empty_cart_t: 'صينيتك فارغة حالياً',
    empty_cart_d: 'أضف الستيك وبرغر الواغيو والأطباق الجانبية لبدء الطلب.',
    cart_guest_heading: 'بيانات الطلب والضيف',
    type_dine_in: 'تناول داخل المطعم',
    type_takeaway: 'استلام سفري / توصيل',
    lbl_table_num: 'رقم الطاولة (إن كنت جالساً)',
    lbl_chef_instructions: 'ملاحظات وتوجيهات الطهي',
    subtotal_lbl: 'المجموع الفرعي',
    total_lbl: 'المجموع الإجمالي',
    btn_send_order_whatsapp: 'إرسال الطلب عبر واتساب',
    btn_clear_cart: 'مسح جميع العناصر',

    // Mobile Tabs
    tab_home: 'الرئيسية',
    tab_menu: 'القائمة',
    tab_book: 'الحجز',
    tab_tray: 'الطلب',

    // Toasts
    toast_item_added: 'تمت الإضافة إلى صينية الطلب',
    toast_item_removed: 'تم حذف العنصر',
    toast_tray_cleared: 'تم مسح الصينية',
    toast_form_required: 'يرجى إدخال الاسم ورقم الواتساب.'
  })
});

// ==========================================================================
// 3. CURATED GOURMET MENU CATALOG (CHAR SPECIFIC)
// ==========================================================================
const GOURMET_MENU = Object.freeze([
  // 1. Prime Steaks
  Object.freeze({
    id: 'char-1',
    category: 'steaks',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['steaks', 'dry-aged'],
    pills: ['1.1kg Tomahawk', '45-Day Dry-Aged', 'Serves 2-3'],
    pills_ar: ['توماهوك 1.1 كغ', 'معتق 45 يوم', 'يكفي 2-3 ضيوف'],
    name_en: '45-Day Dry-Aged Tomahawk (1.1kg)',
    name_ar: 'توماهوك معتق 45 يوماً (1.1 كغ)',
    tag_en: 'Wood-Fired Signature',
    tag_ar: 'توقيع الحطب',
    desc_en: 'Massive bone-in ribeye dry-aged for 45 days in pink salt chamber. Seared at 950°C over oak embers, carved tableside with smoked marrow butter.',
    desc_ar: 'شريحة ريب آي ضخمة معتقة 45 يوماً في غرف ملح الهيمالايا، مشوية على جمر السنديان بحرارة 950°م مع زبدة النخاع المدخنة.'
  }),
  Object.freeze({
    id: 'char-2',
    category: 'steaks',
    price: 5200,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    tags: ['steaks', 'wagyu'],
    pills: ['Miyazaki A5 Wagyu', 'BMS 11+', '250g Cut'],
    pills_ar: ['واغيو ميازاكي A5', 'تعريق رخامي 11+', 'قطعة 250غ'],
    name_en: 'Japanese A5 Wagyu Ribeye (250g)',
    name_ar: 'ريب آي واغيو ياباني أصيل A5 (250غ)',
    tag_en: 'Authentic Japan Import',
    tag_ar: 'استيراد ياباني أصيل',
    desc_en: 'Directly imported Miyazaki Wagyu with extraordinary marbling. Flash-seared over white oak binchotan for melt-in-mouth silkiness.',
    desc_ar: 'قطع واغيو ميازاكي اليابانية بتعريق رخامي فائق النعومة، تذوب في الفم بعد شواء فلاش على فحم السنديان.'
  }),
  Object.freeze({
    id: 'char-3',
    category: 'steaks',
    price: 4400,
    image: 'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&w=800&q=80',
    tags: ['steaks', 'dry-aged'],
    pills: ['350g Prime Cut', 'Bone Marrow Glaze', 'Charcoal Crust'],
    pills_ar: ['قطعة 350غ', 'جليز نخاع العظم', 'قشرة فحم مكرملة'],
    name_en: 'Prime Black Angus Striploin (350g)',
    name_ar: 'ستربلوين بلاك أنغوس الفاخر (350غ)',
    tag_en: 'Oak Charcoal Sear',
    tag_ar: 'شواء فحم السنديان',
    desc_en: 'Robust, deeply flavorful prime striploin steak with a caramelized peppered crust and roasted garlic confit.',
    desc_ar: 'شريحة ستربلوين بلاك أنغوس بنكهة لحم مكثفة وقشرة مكرملة بالفلفل الأسود مع ثوم كونفي مشوي.'
  }),

  // 2. Wagyu Burgers
  Object.freeze({
    id: 'char-4',
    category: 'wagyu',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tags: ['wagyu'],
    pills: ['Double A5 Wagyu Patty', 'Smoked Bone Marrow', 'Brioche Bun'],
    pills_ar: ['شريحتا واغيو A5', 'نخاع عظم مدخن', 'خبز بريوش'],
    name_en: 'CHAR Smashed Wagyu Burger',
    name_ar: 'برغر تشار سماش واغيو بالزبدة',
    tag_en: 'Best Seller',
    tag_ar: 'الأكثر طلباً',
    desc_en: 'Double smash Wagyu beef patties with crisp lacy edges, melted sharp aged cheddar, smoked bone marrow butter, and house secret sauce.',
    desc_ar: 'شريحتا واغيو مسطحتان على صاج ملتهب بحواف مقرمشة، جبن شيدر معتق، زبدة نخاع مدخنة، وصوص تشار السري الخاص.'
  }),
  Object.freeze({
    id: 'char-5',
    category: 'wagyu',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    tags: ['wagyu', 'truffle'],
    pills: ['Black Winter Truffle', 'Aged Comté 24M', 'Truffle Mayo'],
    pills_ar: ['كمأة سوداء شتوية', 'جبن كومتيه 24 شهر', 'مايونيز الكمأة'],
    name_en: 'Black Truffle & Wagyu Brioche',
    name_ar: 'برغر الواغيو بالكمأة السوداء والجبن المعتق',
    tag_en: 'Gourmet Creation',
    tag_ar: 'ابتكار فاخر',
    desc_en: 'Thick charcoal-grilled Wagyu patty, shaved black winter truffle, caramelized shallot jam, and melted French Comté cheese in toasted brioche.',
    desc_ar: 'قطعة واغيو سميكة مشوية على الفحم، كمأة سوداء مبشورة، مربى الكراث المكرمل، وجبن كومتيه فرنسي ذائب.'
  }),

  // 3. Wood-Fired Sides
  Object.freeze({
    id: 'char-6',
    category: 'sides',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['sides'],
    pills: ['Roasted Split Bone', 'Herb Chimichurri', 'Sourdough Toast'],
    pills_ar: ['نخاع عظم مشوي', 'تشيميتشوري الأعشاب', 'توست خميرة طبيعية'],
    name_en: 'Wood-Roasted Bone Marrow & Toast',
    name_ar: 'نخاع العظم المشوي على الحطب مع التوست',
    tag_en: 'Pitmaster Favorite',
    tag_ar: 'المفضل لدى الطهاة',
    desc_en: 'Canoe-cut beef bone marrow roasted in open embers until buttery and rich, topped with fresh herb chimichurri and grilled sourdough.',
    desc_ar: 'عظام بقر مشوية على الجمر حتى تذوب النكهة الغنية، تقدم مع صوص تشيميتشوري بالأعشاب وخبز السور دو المحمص.'
  }),
  Object.freeze({
    id: 'char-7',
    category: 'sides',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80',
    tags: ['sides', 'truffle'],
    pills: ['Triple Cooked', '30-Mo Parmigiano', 'White Truffle Oil'],
    pills_ar: ['بطاطس مقرمشة 3 مرات', 'بارميزان معتق', 'زيت الكمأة البيضاء'],
    name_en: 'Truffle & Aged Parmesan Fries',
    name_ar: 'بطاطس مقلية بالكمأة وجبن البارميزان المعتق',
    tag_en: 'Crisp & Aromatic',
    tag_ar: 'مقرمش وعطري',
    desc_en: 'Hand-cut triple-cooked potatoes tossed in white truffle oil, rosemary sea salt, and generous mountain of 30-month Parmigiano-Reggiano.',
    desc_ar: 'أصابع بطاطس مقرمشة ثلاثية الطهي ممزوجة بزيت الكمأة وملح الروزماري وجبن بارميزان إيطالي معتق 30 شهراً.'
  }),

  // 4. Drinks & Desserts
  Object.freeze({
    id: 'char-8',
    category: 'drinks',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    tags: ['drinks'],
    pills: ['Valrhona 70%', 'Molten Dark Core', 'Salted Caramel'],
    pills_ar: ['شوكولاتة فالرونا 70%', 'قلب ذائب دافئ', 'كراميل مملح'],
    name_en: 'Valrhona Molten Dark Fire Dome',
    name_ar: 'كعكة فندان شوكولاتة فالرونا مع القلب الذائب',
    tag_en: 'Haute Pâtisserie',
    tag_ar: 'حلويات فاخرة',
    desc_en: 'Single-origin 70% Valrhona dark chocolate cake with a molten praline center and Tahitian vanilla bean gelato.',
    desc_ar: 'كعكة شوكولاتة فالرونا 70% داكنة مع قلب البرالينيه الذائب وجيلاتو فانيليا تاهيتي.'
  }),
  Object.freeze({
    id: 'char-9',
    category: 'drinks',
    price: 900,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    tags: ['drinks'],
    pills: ['Smoked Oak Wood', 'Citrus & Bitters', 'Zero Alcohol'],
    pills_ar: ['خشب سنديان مدخن', 'حمضيات', 'خالٍ من الكحول'],
    name_en: 'Smoked Oak Botanical Mocktail',
    name_ar: 'مشروب السنديان المدخن المنعش (بدون كحول)',
    tag_en: 'House Signature Mocktail',
    tag_ar: 'مشروب تشار المميز',
    desc_en: 'Aromatic non-alcoholic botanical creation smoked tableside with oak chips, cold-pressed blood orange, and botanical tonic.',
    desc_ar: 'مشروب منعش يدخن أمامك بخشب السنديان، مع عصير البرتقال الأحمر المعصور والمنكهات العطرية الطبيعية.'
  })
]);

// ==========================================================================
// 4. STATE STORE CLASS
// ==========================================================================
class RestaurantStore {
  constructor() {
    this.currentLang = this.loadLanguage();
    this.cart = this.loadCart();
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.stepperDrafts = new Map();
  }

  loadLanguage() {
    const saved = localStorage.getItem(APP_CONFIG.STORAGE_LANG_KEY);
    return saved === 'ar' ? 'ar' : 'en';
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem(APP_CONFIG.STORAGE_LANG_KEY, lang);
  }

  loadCart() {
    try {
      const raw = localStorage.getItem(APP_CONFIG.STORAGE_CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  saveCart() {
    localStorage.setItem(APP_CONFIG.STORAGE_CART_KEY, JSON.stringify(this.cart));
  }

  addToCart(id, qty = 1) {
    const dish = GOURMET_MENU.find(d => d.id === id);
    if (!dish) return;

    const existing = this.cart.find(c => c.id === id);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({
        id: dish.id,
        price: dish.price,
        qty: qty
      });
    }
    this.saveCart();
  }

  updateCartQty(id, newQty) {
    if (newQty <= 0) {
      this.cart = this.cart.filter(c => c.id !== id);
    } else {
      const item = this.cart.find(c => c.id === id);
      if (item) item.qty = newQty;
    }
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getCartItemCount() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  formatPriceDZD(amount) {
    const formatted = new Intl.NumberFormat(this.currentLang === 'ar' ? 'ar-DZ' : 'en-US').format(amount);
    const curr = this.currentLang === 'ar' ? APP_CONFIG.CURRENCY_AR : APP_CONFIG.CURRENCY_EN;
    return `${formatted} ${curr}`;
  }

  formatPriceEUR(dzdAmount) {
    const eur = (dzdAmount / APP_CONFIG.EUR_EXCHANGE_RATE).toFixed(2);
    return `≈ ${eur} €`;
  }
}

// Instantiate Global App Store
const store = new RestaurantStore();

// ==========================================================================
// 5. DOM CONTROLLER & RENDER ENGINE
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initCinematicCurtain();
  initLanguage();
  initHeaderAndScroll();
  initCategoryFilterCounters();
  renderMenuGrid();
  initSearch();
  initReservationSuite();
  initCartDrawer();
  initMobileBottomBar();
});

// --------------------------------------------------------------------------
// Cinematic Curtain Reveal Intro
// --------------------------------------------------------------------------
function initCinematicCurtain() {
  const curtain = document.getElementById('intro-curtain');
  if (!curtain) return;

  const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const alreadyShown = sessionStorage.getItem('char_intro_shown');

  if (alreadyShown || isReducedMotion) {
    curtain.style.display = 'none';
    if (curtain.parentNode) {
      curtain.remove();
    }
    return;
  }

  // Freeze scroll during intro reveal
  document.body.style.overflow = 'hidden';

  // Wait 1.2s, then trigger cinematic curtain slide
  setTimeout(() => {
    curtain.classList.add('revealed');
    document.body.style.overflow = '';
    try {
      sessionStorage.setItem('char_intro_shown', 'true');
    } catch (e) {
      // Ignore quota or storage errors
    }

    const removeCurtain = () => {
      if (curtain.parentNode) {
        curtain.remove();
      }
    };

    const leftPanel = curtain.querySelector('.curtain-left');
    if (leftPanel) {
      leftPanel.addEventListener('transitionend', removeCurtain, { once: true });
    }
    // Safety fallback timeout after transition
    setTimeout(removeCurtain, 950);
  }, 1200);
}

// --------------------------------------------------------------------------
// Language Initialization & Switching
// --------------------------------------------------------------------------
function initLanguage() {
  applyLanguage(store.currentLang);

  const langBtn = document.getElementById('langToggleBtn');
  const drawerLangBtn = document.getElementById('drawerLangToggleBtn');

  const toggleHandler = () => {
    const nextLang = store.currentLang === 'en' ? 'ar' : 'en';
    store.setLanguage(nextLang);
    applyLanguage(nextLang);
    renderMenuGrid();
    renderCartDrawer();
  };

  if (langBtn) langBtn.addEventListener('click', toggleHandler);
  if (drawerLangBtn) drawerLangBtn.addEventListener('click', toggleHandler);
}

function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Toggle label texts
  const langCurrentLabel = document.getElementById('langCurrentLabel');
  if (langCurrentLabel) langCurrentLabel.textContent = t.lang_toggle_text;

  const drawerLangLabel = document.getElementById('drawerLangLabel');
  if (drawerLangLabel) drawerLangLabel.textContent = t.drawer_lang_text;

  // Replace text for all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Replace placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });
}

// --------------------------------------------------------------------------
// Header Scroll Behavior & Mobile Drawer
// --------------------------------------------------------------------------
function initHeaderAndScroll() {
  const header = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  const openDrawer = () => {
    mobileDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
  };

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// --------------------------------------------------------------------------
// Category Filter Pills & Counters
// --------------------------------------------------------------------------
function initCategoryFilterCounters() {
  const counts = {
    all: GOURMET_MENU.length,
    steaks: GOURMET_MENU.filter(d => d.category === 'steaks').length,
    wagyu: GOURMET_MENU.filter(d => d.category === 'wagyu').length,
    sides: GOURMET_MENU.filter(d => d.category === 'sides').length,
    drinks: GOURMET_MENU.filter(d => d.category === 'drinks').length
  };

  const pillAll = document.getElementById('pillCountAll');
  const pillSteaks = document.getElementById('pillCountSteaks');
  const pillWagyu = document.getElementById('pillCountWagyu');
  const pillSides = document.getElementById('pillCountSides');
  const pillDrinks = document.getElementById('pillCountDrinks');

  if (pillAll) pillAll.textContent = counts.all;
  if (pillSteaks) pillSteaks.textContent = counts.steaks;
  if (pillWagyu) pillWagyu.textContent = counts.wagyu;
  if (pillSides) pillSides.textContent = counts.sides;
  if (pillDrinks) pillDrinks.textContent = counts.drinks;

  const dropCountAll = document.getElementById('dropCountAll');
  const dropCountSteaks = document.getElementById('dropCountSteaks');
  const dropCountWagyu = document.getElementById('dropCountWagyu');
  const dropCountSides = document.getElementById('dropCountSides');
  const dropCountDrinks = document.getElementById('dropCountDrinks');

  if (dropCountAll) dropCountAll.textContent = counts.all;
  if (dropCountSteaks) dropCountSteaks.textContent = counts.steaks;
  if (dropCountWagyu) dropCountWagyu.textContent = counts.wagyu;
  if (dropCountSides) dropCountSides.textContent = counts.sides;
  if (dropCountDrinks) dropCountDrinks.textContent = counts.drinks;

  const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
  const mobileDropdownContainer = document.querySelector('.custom-dropdown');
  const mobileDropdownLabel = document.getElementById('mobileDropdownLabel');
  const dropdownItems = document.querySelectorAll('.dropdown-item');

  function updateMobileDropdownLabel(cat) {
    if (!mobileDropdownLabel) return;
    const catLabels = {
      'all': `ALL ITEMS (${counts.all})`,
      'steaks': `PRIME STEAKS (${counts.steaks})`,
      'wagyu': `WAGYU BURGERS (${counts.wagyu})`,
      'sides': `WOOD-FIRED SIDES (${counts.sides})`,
      'drinks': `DRINKS & DESSERTS (${counts.drinks})`
    };
    mobileDropdownLabel.textContent = catLabels[cat] || catLabels['all'];
  }

  updateMobileDropdownLabel(store.activeCategory || 'all');

  if (mobileDropdownBtn && mobileDropdownContainer) {
    mobileDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDropdownContainer.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!mobileDropdownContainer.contains(e.target)) {
        mobileDropdownContainer.classList.remove('open');
      }
    });
  }

  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.getAttribute('data-cat');
      store.activeCategory = cat;
      
      dropdownItems.forEach(d => d.classList.remove('active'));
      item.classList.add('active');

      if (mobileDropdownContainer) mobileDropdownContainer.classList.remove('open');
      updateMobileDropdownLabel(cat);

      document.querySelectorAll('.btn-cat-pill').forEach(p => p.classList.remove('active'));
      const activePill = document.querySelector(`.btn-cat-pill[data-cat="${cat}"]`);
      if (activePill) activePill.classList.add('active');

      renderMenuGrid();
    });
  });

  document.querySelectorAll('.btn-cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-cat-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');
      store.activeCategory = cat;
      
      updateMobileDropdownLabel(cat);
      dropdownItems.forEach(d => d.classList.remove('active'));
      const dropItem = document.querySelector(`.dropdown-item[data-cat="${cat}"]`);
      if (dropItem) dropItem.classList.add('active');

      renderMenuGrid();
    });
  });
}

// --------------------------------------------------------------------------
// Search Engine
// --------------------------------------------------------------------------
function initSearch() {
  const searchInput = document.getElementById('menuSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const resetBtn = document.getElementById('resetFiltersBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const rawSearch = e.target.value.trim();
      store.searchQuery = sanitizeInput(rawSearch).toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = store.searchQuery ? 'block' : 'none';
      }
      renderMenuGrid();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      store.searchQuery = '';
      clearBtn.style.display = 'none';
      renderMenuGrid();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      store.activeCategory = 'all';
      store.searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (clearBtn) clearBtn.style.display = 'none';

      document.querySelectorAll('.btn-cat-pill').forEach(p => p.classList.remove('active'));
      const allPill = document.querySelector('.btn-cat-pill[data-cat="all"]');
      if (allPill) allPill.classList.add('active');

      const dropdownItems = document.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(d => d.classList.remove('active'));
      const dropItemAll = document.querySelector('.dropdown-item[data-cat="all"]');
      if (dropItemAll) dropItemAll.classList.add('active');

      const mobileDropdownLabel = document.getElementById('mobileDropdownLabel');
      if (mobileDropdownLabel) {
        const dropCountAll = document.getElementById('dropCountAll');
        mobileDropdownLabel.textContent = `ALL ITEMS (${dropCountAll ? dropCountAll.textContent : '0'})`;
      }

      renderMenuGrid();
    });
  }
}

// --------------------------------------------------------------------------
// Menu Grid Rendering
// --------------------------------------------------------------------------
function renderMenuGrid() {
  const grid = document.getElementById('menuGridContainer');
  const noResults = document.getElementById('noResultsState');
  if (!grid) return;

  const isAr = store.currentLang === 'ar';
  const t = TRANSLATIONS[store.currentLang];

  const filtered = GOURMET_MENU.filter(dish => {
    if (store.activeCategory !== 'all' && dish.category !== store.activeCategory) {
      return false;
    }
    if (store.searchQuery) {
      const q = store.searchQuery;
      const matchEn = dish.name_en.toLowerCase().includes(q) || dish.desc_en.toLowerCase().includes(q);
      const matchAr = dish.name_ar.includes(q) || dish.desc_ar.includes(q);
      if (!matchEn && !matchAr) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';

  grid.innerHTML = filtered.map(dish => {
    const dishName = isAr ? dish.name_ar : dish.name_en;
    const dishTag = isAr ? dish.tag_ar : dish.tag_en;
    const dishDesc = isAr ? dish.desc_ar : dish.desc_en;
    const pillsList = isAr ? dish.pills_ar : dish.pills;
    const draftQty = store.stepperDrafts.get(dish.id) || 1;
    const inCartItem = store.cart.find(c => c.id === dish.id);

    const priceDzd = store.formatPriceDZD(dish.price);
    const priceEur = store.formatPriceEUR(dish.price);

    const pillsHtml = (pillsList || []).map(p => `<span class="pill-ingredient">${p}</span>`).join('');

    return `
      <article class="dish-card-brutalist" data-dish-id="${dish.id}">
        <div class="dish-image-frame">
          <img src="${dish.image}" alt="${dishName}" loading="lazy" />
          <span class="dish-tag-strip">${dishTag}</span>
        </div>

        <div class="dish-body-brutalist">
          <div class="dish-header-row">
            <h3 class="dish-title-brutalist">${dishName}</h3>
            <div class="dish-price-block">
              <span class="dish-price-dzd">${priceDzd}</span>
              <span class="dish-price-eur">${priceEur}</span>
            </div>
          </div>

          <p class="dish-desc-text">${dishDesc}</p>

          <div class="dish-pills-list">
            ${pillsHtml}
          </div>

          <div class="dish-footer-row">
            <div class="brutalist-stepper" aria-label="Quantity Stepper">
              <button type="button" class="btn-stepper stepper-minus" data-id="${dish.id}" aria-label="Decrease quantity">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="stepper-count-num" id="stepperVal-${dish.id}">${draftQty}</span>
              <button type="button" class="btn-stepper stepper-plus" data-id="${dish.id}" aria-label="Increase quantity">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>

            <button type="button" class="btn-add-dish ${inCartItem ? 'in-tray' : ''}" data-id="${dish.id}">
              <i class="fa-solid fa-bag-shopping"></i>
              <span>${inCartItem ? t.btn_in_tray : t.btn_add_tray}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach Stepper & Add Listeners
  grid.querySelectorAll('.stepper-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      let current = store.stepperDrafts.get(id) || 1;
      if (current > 1) {
        current--;
        store.stepperDrafts.set(id, current);
        const valEl = document.getElementById(`stepperVal-${id}`);
        if (valEl) valEl.textContent = current;
      }
    });
  });

  grid.querySelectorAll('.stepper-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      let current = store.stepperDrafts.get(id) || 1;
      if (current < 20) {
        current++;
        store.stepperDrafts.set(id, current);
        const valEl = document.getElementById(`stepperVal-${id}`);
        if (valEl) valEl.textContent = current;
      }
    });
  });

  grid.querySelectorAll('.btn-add-dish').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const qty = store.stepperDrafts.get(id) || 1;
      store.addToCart(id, qty);
      renderCartDrawer();
      renderMenuGrid();
      showToast(TRANSLATIONS[store.currentLang].toast_item_added);
    });
  });
}

// --------------------------------------------------------------------------
// Security: Centralized Input Sanitizer
// --------------------------------------------------------------------------
function sanitizeInput(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
            .replace(/&/g, "&amp;");
}

// --------------------------------------------------------------------------
// VIP Table Reservation Suite & WhatsApp Dispatch
// --------------------------------------------------------------------------
function initReservationSuite() {
  const form = document.getElementById('reservationForm');
  const dateInput = document.getElementById('resDate');
  const partyInput = document.getElementById('resPartyInput');
  const zoneInput = document.getElementById('resZoneInput');

  // Track page load time for bot detection
  const formLoadTime = Date.now();

  // Set default date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Party size buttons
  document.querySelectorAll('.party-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.party-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (partyInput) partyInput.value = btn.getAttribute('data-guests');
    });
  });

  // Seating area buttons
  document.querySelectorAll('.seating-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.seating-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (zoneInput) zoneInput.value = btn.getAttribute('data-zone');
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Bot Defense: Honeypot Check
      const hpA = document.getElementById('hpTokenA')?.value;
      const hpB = document.getElementById('hpTokenB')?.value;
      if (hpA || hpB) {
        console.warn('Bot detected by honeypot');
        return; // Silent abort
      }

      // Bot Defense: Timing Check (Form submitted too fast)
      if (Date.now() - formLoadTime < 2000) {
        console.warn('Bot detected by speed check');
        return; // Silent abort
      }

      // Bot Defense: Cooldown Rate Limiter
      const lastBooking = localStorage.getItem('char_last_booking');
      if (lastBooking && Date.now() - parseInt(lastBooking, 10) < 45000) {
        showToast(store.currentLang === 'ar' ? 'يرجى الانتظار قليلاً قبل إرسال طلب جديد.' : 'Please wait before submitting another request.');
        return;
      }

      const rawName = (document.getElementById('resGuestName')?.value || '').trim();
      const rawPhone = (document.getElementById('resGuestPhone')?.value || '').trim();
      const rawGuests = partyInput ? partyInput.value : '2';
      const rawZone = zoneInput ? zoneInput.value : 'Grill Counter';
      const rawDate = dateInput ? dateInput.value : '';
      const rawTime = document.getElementById('resTimeSlot')?.value || '19:30 PM';
      const rawNotes = (document.getElementById('resNotes')?.value || 'None').trim();

      const guestName = sanitizeInput(rawName);
      const guestPhone = sanitizeInput(rawPhone);
      const guests = sanitizeInput(rawGuests);
      const zone = sanitizeInput(rawZone);
      const resDate = sanitizeInput(rawDate);
      const timeSlot = sanitizeInput(rawTime);
      const notes = sanitizeInput(rawNotes);

      if (!guestName || !guestPhone) {
        showToast(TRANSLATIONS[store.currentLang].toast_form_required);
        return;
      }

      // Strict Phone Regex Validation
      const phoneRegex = /^((\+213|00213|213)?[5-7][0-9]{8})|(0[5-7][0-9]{8})$/;
      if (!phoneRegex.test(guestPhone.replace(/\s+/g, ''))) {
        showToast(store.currentLang === 'ar' ? 'رقم الهاتف غير صالح' : 'Invalid phone number');
        return;
      }

      localStorage.setItem('char_last_booking', Date.now().toString());

      const isAr = store.currentLang === 'ar';
      let msg = '';

      if (isAr) {
        msg = `🔥 *طلب حجز طاولة جديدة — مطعم تشار (CHAR)*
━━━━━━━━━━━━━━━━━━━━
👤 *اسم الضيف:* ${guestName}
📱 *رقم الواتساب:* ${guestPhone}
👥 *عدد الضيوف:* ${guests} ضيوف
📍 *منطقة الجلوس:* ${zone}
📅 *تاريخ الحجز:* ${resDate}
⏰ *وقت الحضور:* ${timeSlot}
📝 *ملاحظات خاصة:* ${notes}
━━━━━━━━━━━━━━━━━━━━
📍 *CHAR Wood-Fired Bistro | Hydra, Alger*`;
      } else {
        msg = `🔥 *TABLE RESERVATION REQUEST — CHAR BISTRO*
━━━━━━━━━━━━━━━━━━━━
👤 *Guest Name:* ${guestName}
📱 *WhatsApp Phone:* ${guestPhone}
👥 *Party Size:* ${guests} Guests
📍 *Seating Zone:* ${zone}
📅 *Date:* ${resDate}
⏰ *Time Slot:* ${timeSlot}
📝 *Special Notes:* ${notes}
━━━━━━━━━━━━━━━━━━━━
📍 *CHAR Wood-Fired Bistro | Hydra, Alger*`;
      }

      const encoded = encodeURIComponent(msg);
      
      const messageText = `
🔥 <b>حجز جديد عبر الموقع - مطعم CHAR</b> 🔥
━━━━━━━━━━━━━━━
👤 <b>الاسم:</b> ${guestName}
📞 <b>الهاتف:</b> ${guestPhone}
📅 <b>التاريخ:</b> ${resDate}
⏰ <b>الوقت:</b> ${timeSlot}
👥 <b>عدد الأفراد:</b> ${guests}
📍 <b>منطقة الجلوس:</b> ${zone}
📝 <b>ملاحظات:</b> ${notes}
━━━━━━━━━━━━━━━
🕒 <i>إشعار فوري من الموقع</i>
      `.trim();

      // إرسال البيانات للتيليجرام في الخلفية وتحديث الواجهة
      const submitBtn = document.getElementById('submitResBtn');
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري الإرسال...</span>`;
      
      const whatsappUrl = `https://wa.me/${APP_CONFIG.WHATSAPP_PHONE}?text=${encoded}`;

      fetch(`https://api.telegram.org/bot8651744427:AAHUaUG3a9U9ea396uE29VoCyga4lRArikI/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "7598720032",
          text: messageText,
          parse_mode: "HTML"
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log("Telegram response:", data);
        // عرض واجهة النجاح بدلاً من النموذج
        form.innerHTML = `
          <div class="p-8 rounded-2xl bg-[#111111] border border-neutral-800 text-center space-y-4" style="animation: fadeIn 0.5s ease-in-out;">
            <div class="w-12 h-12 mx-auto rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-xl font-bold">
              ✓
            </div>
            <h3 class="text-xl font-black text-white uppercase tracking-wide">
              تم إرسال طلبك بنجاح
            </h3>
            <p class="text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
              تم استلام طلب الحجز وهو قيد المراجعة حالياً، وسيتم التواصل معك في أقرب وقت لتأكيد كافة التفاصيل.
            </p>
          </div>
        `;
      })
      .catch(err => {
        console.error("Telegram network error", err);
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
        showToast(isAr ? "فشل الإرسال، يرجى المحاولة مرة أخرى." : "Submission failed, please try again.");
      });
    });
  }
}

// --------------------------------------------------------------------------
// Slide-Over Cart Drawer & WhatsApp Checkout
// --------------------------------------------------------------------------
function initCartDrawer() {
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const emptyTrayExploreBtn = document.getElementById('emptyTrayExploreBtn');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const checkoutBtn = document.getElementById('cartCheckoutWhatsAppBtn');

  const openCart = () => {
    cartDrawer.classList.add('active');
    cartBackdrop.classList.add('active');
  };

  const closeCart = () => {
    cartDrawer.classList.remove('active');
    cartBackdrop.classList.remove('active');
  };

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

  if (emptyTrayExploreBtn) {
    emptyTrayExploreBtn.addEventListener('click', () => {
      closeCart();
      const menuSec = document.getElementById('menu');
      if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      store.clearCart();
      renderCartDrawer();
      renderMenuGrid();
      showToast(TRANSLATIONS[store.currentLang].toast_tray_cleared);
    });
  }

  // Dine-in vs Takeaway Toggle
  const typeDineIn = document.getElementById('cartTypeDineIn');
  const typeTakeaway = document.getElementById('cartTypeTakeaway');
  const tableNumField = document.getElementById('cartTableNumField');

  if (typeDineIn && typeTakeaway) {
    typeDineIn.addEventListener('click', () => {
      typeDineIn.classList.add('active');
      typeTakeaway.classList.remove('active');
      if (tableNumField) tableNumField.style.display = 'block';
    });

    typeTakeaway.addEventListener('click', () => {
      typeTakeaway.classList.add('active');
      typeDineIn.classList.remove('active');
      if (tableNumField) tableNumField.style.display = 'none';
    });
  }

  // Checkout via WhatsApp
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (store.cart.length === 0) return;

      const rawName = (document.getElementById('cartGuestName')?.value || '').trim();
      const rawPhone = (document.getElementById('cartGuestPhone')?.value || '').trim();
      const isDineIn = typeDineIn?.classList.contains('active');
      const orderType = isDineIn ? 'Dine-In Table' : 'Takeaway / Delivery';
      const rawTable = (document.getElementById('cartTableNumber')?.value || 'N/A').trim();
      const rawNotes = (document.getElementById('cartOrderNotes')?.value || 'Standard Preparation').trim();

      const guestName = sanitizeInput(rawName);
      const guestPhone = sanitizeInput(rawPhone);
      const tableNumber = sanitizeInput(rawTable);
      const notes = sanitizeInput(rawNotes);

      if (!guestName || !guestPhone) {
        showToast(TRANSLATIONS[store.currentLang].toast_form_required);
        return;
      }
      
      const phoneRegex = /^((\+213|00213|213)?[5-7][0-9]{8})|(0[5-7][0-9]{8})$/;
      if (!phoneRegex.test(guestPhone.replace(/\s+/g, ''))) {
        showToast(store.currentLang === 'ar' ? 'رقم الهاتف غير صالح' : 'Invalid phone number');
        return;
      }

      const isAr = store.currentLang === 'ar';
      const itemsList = store.cart.map(item => {
        const dish = GOURMET_MENU.find(d => d.id === item.id);
        const name = isAr ? dish?.name_ar : dish?.name_en;
        const price = store.formatPriceDZD(item.price * item.qty);
        return `▫️ *${item.qty}x* ${name} — ${price}`;
      }).join('\n');

      const dzdTotal = store.formatPriceDZD(store.getCartSubtotal());
      const eurTotal = store.formatPriceEUR(store.getCartSubtotal());

      let orderMsg = '';

      if (isAr) {
        orderMsg = `🔥 *طلب وجبة جديد — مطعم تشار (CHAR)*
━━━━━━━━━━━━━━━━━━━━
👤 *الاسم:* ${guestName}
📱 *الهاتف:* ${guestPhone}
🍽️ *نوع الطلب:* ${isDineIn ? 'تناول بالمطعم' : 'سفري / توصيل'}
${isDineIn ? `🏷️ *رقم الطاولة:* ${tableNumber}\n` : ''}
📋 *قائمة الأطباق المطلوبة:*
${itemsList}

💰 *المجموع الإجمالي:* ${dzdTotal} (${eurTotal})
📝 *ملاحظات الطهي:* ${notes}
━━━━━━━━━━━━━━━━━━━━
📍 *CHAR Wood-Fired Bistro | Hydra, Alger*`;
      } else {
        orderMsg = `🔥 *NEW KITCHEN ORDER — CHAR BISTRO*
━━━━━━━━━━━━━━━━━━━━
👤 *Guest Name:* ${guestName}
📱 *Phone:* ${guestPhone}
🍽️ *Order Mode:* ${orderType}
${isDineIn ? `🏷️ *Table Number:* ${tableNumber}\n` : ''}
📋 *Order Items:*
${itemsList}

💰 *Grand Total:* ${dzdTotal} (${eurTotal})
📝 *Kitchen Notes:* ${notes}
━━━━━━━━━━━━━━━━━━━━
📍 *CHAR Wood-Fired Bistro | Hydra, Alger*`;
      }

      const encoded = encodeURIComponent(orderMsg);
      const whatsappUrl = `https://wa.me/${APP_CONFIG.WHATSAPP_PHONE}?text=${encoded}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // Initial cart drawer render
  renderCartDrawer();
}

function renderCartDrawer() {
  const badge = document.getElementById('cartBadgeCount');
  const mobileBadge = document.getElementById('mobileTabBadge');
  const itemCountPill = document.getElementById('cartDrawerItemCount');
  const itemsStack = document.getElementById('cartItemsStack');
  const emptyView = document.getElementById('emptyTrayView');
  const guestBlock = document.getElementById('cartGuestBlock');
  const footerBlock = document.getElementById('cartDrawerFooter');

  const subtotalEl = document.getElementById('cartSubtotalAmount');
  const grandTotalEl = document.getElementById('cartGrandTotalAmount');
  const grandTotalEur = document.getElementById('cartGrandTotalEur');

  const count = store.getCartItemCount();
  const subtotal = store.getCartSubtotal();

  if (badge) badge.textContent = count;
  if (mobileBadge) mobileBadge.textContent = count;
  if (itemCountPill) itemCountPill.textContent = `${count} ${count === 1 ? 'Item' : 'Items'}`;

  if (count === 0) {
    if (emptyView) emptyView.style.display = 'flex';
    if (itemsStack) itemsStack.innerHTML = '';
    if (guestBlock) guestBlock.style.display = 'none';
    if (footerBlock) footerBlock.style.display = 'none';
    return;
  }

  if (emptyView) emptyView.style.display = 'none';
  if (guestBlock) guestBlock.style.display = 'flex';
  if (footerBlock) footerBlock.style.display = 'flex';

  const isAr = store.currentLang === 'ar';

  if (itemsStack) {
    itemsStack.innerHTML = store.cart.map(item => {
      const dish = GOURMET_MENU.find(d => d.id === item.id);
      if (!dish) return '';
      const dishName = isAr ? dish.name_ar : dish.name_en;
      const totalItemPrice = store.formatPriceDZD(item.price * item.qty);

      return `
        <div class="cart-item-row" data-id="${item.id}">
          <img src="${dish.image}" alt="${dishName}" class="cart-item-img" />
          <div class="cart-item-info">
            <h4 class="cart-item-name">${dishName}</h4>
            <div class="cart-item-price-stack">${totalItemPrice}</div>
          </div>

          <div class="brutalist-stepper" style="transform: scale(0.9);">
            <button type="button" class="btn-stepper cart-minus-btn" data-id="${item.id}" aria-label="Decrease quantity">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="stepper-count-num">${item.qty}</span>
            <button type="button" class="btn-stepper cart-plus-btn" data-id="${item.id}" aria-label="Increase quantity">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>

          <button type="button" class="cart-item-remove-btn" data-id="${item.id}" aria-label="Remove item">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      `;
    }).join('');

    // Steppers inside cart
    itemsStack.querySelectorAll('.cart-minus-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = store.cart.find(c => c.id === id);
        if (item) {
          store.updateCartQty(id, item.qty - 1);
          renderCartDrawer();
          renderMenuGrid();
        }
      });
    });

    itemsStack.querySelectorAll('.cart-plus-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = store.cart.find(c => c.id === id);
        if (item) {
          store.updateCartQty(id, item.qty + 1);
          renderCartDrawer();
          renderMenuGrid();
        }
      });
    });

    itemsStack.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        store.updateCartQty(id, 0);
        renderCartDrawer();
        renderMenuGrid();
        showToast(TRANSLATIONS[store.currentLang].toast_item_removed);
      });
    });
  }

  if (subtotalEl) subtotalEl.textContent = store.formatPriceDZD(subtotal);
  if (grandTotalEl) grandTotalEl.textContent = store.formatPriceDZD(subtotal);
  if (grandTotalEur) grandTotalEur.textContent = store.formatPriceEUR(subtotal);
}

// --------------------------------------------------------------------------
// Mobile Bottom Navigation Bar
// --------------------------------------------------------------------------
function initMobileBottomBar() {
  const tabs = document.querySelectorAll('.mobile-nav-tab');
  
  // Tab Switching Logic
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      // Remove active state from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active state to clicked tab
      this.classList.add('active');
    });
  });

  const tabCart = document.getElementById('tabCart');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');

  if (tabCart && cartDrawer && cartBackdrop) {
    tabCart.addEventListener('click', () => {
      cartDrawer.classList.add('active');
      cartBackdrop.classList.add('active');
    });
  }
}

// --------------------------------------------------------------------------
// Toast Notification System
// --------------------------------------------------------------------------
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<i class="fa-solid fa-fire" style="color:var(--cobalt-primary)"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}
