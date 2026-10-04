x = open('index.html', 'rb').read()
s = x.decode('utf-8')

# 1. Page title
s = s.replace(
    '<title>LaptopWale | Best Refurbished Laptops & Second Hand Laptops in India</title>',
    '<title>Tech Life | Certified Refurbished Laptops &amp; Chip-Level Repairs - Pune</title>'
)
s = s.replace(
    '<title>Best Refurbished Laptops in India | Second hand laptops in India | Laptopwale</title>',
    '<title>Tech Life | Certified Refurbished Laptops &amp; Chip-Level Repairs - Pune</title>'
)
s = s.replace(
    '<title>TechStore | Modern Footer</title>',
    '<title>Tech Life</title>'
)

# 2. Navbar logo link - remove laptopwale.in redirect
s = s.replace(
    '<a class="navbar-brand" href="https://laptopwale.in/">',
    '<a class="navbar-brand" href="#">'
)

# 3. Hidden H1 SEO tag
s = s.replace(
    '    Best Refurbished Laptops in India | Second hand laptops in India | Laptopwale',
    '    Tech Life | Certified Refurbished Laptops &amp; Chip-Level Repairs - Pune'
)

# 4. Why Choose heading
s = s.replace(
    '<h2 class="fw-bold mb-2">Why Choose Laptop Wale?</h2>',
    '<h2 class="fw-bold mb-2">Why Choose Tech Life?</h2>'
)
s = s.replace(
    "<p class=\"text-muted mb-5\">India's most trusted destination for certified refurbished tech</p>",
    "<p class=\"text-muted mb-5\">Pune's most trusted destination for certified refurbished tech</p>"
)

# 5. Footer brand name
s = s.replace(
    '<h4 class="footer-heading mb-1" style="font-size: 1.4rem; color:#C12328;">Laptop Wale</h4>',
    '<h4 class="footer-heading mb-1" style="font-size: 1.4rem; color:#C12328;">Tech Life</h4>'
)

# 6. Footer About link text
s = s.replace(
    '<li><a href="about">About LaptopWale</a></li>',
    '<li><a href="#">About Tech Life</a></li>'
)

# 7. Footer Instagram - fix to tech_life_07_
s = s.replace(
    '<a href="https://www.instagram.com/laptop_wale_/"><i class="fab fa-instagram"></i></a>',
    '<a href="https://www.instagram.com/tech_life_07_" target="_blank"><i class="fab fa-instagram"></i></a>'
)

# 8. WhatsApp floating button - fix number to 919309248726
s = s.replace(
    'href="https://wa.me/919713649049?text=Hi!%20I%20am%20interested%20in%20a%20laptop.%20Please%20share%20the%20available%20stock%20and%20offers.%20%0A%0AFrom:%20laptopwale.in"',
    'href="https://wa.me/919309248726?text=Hi%20Tech%20Life!%20I%20am%20interested%20in%20a%20laptop.%20Please%20share%20the%20available%20stock%20and%20offers."'
)

# 9. Promo bar phone number
s = s.replace(
    'Contact Us <a href="tel:+919713649049">+91 97136 49049</a>',
    'Contact Us <a href="tel:+919309248726">+91 93092 48726</a>'
)

# 10. Promo bar duplicate
s = s.replace(
    '            Contact Us <a href="tel:+919713649049">+91 97136 49049</a>   |  \r\n            Free delivery order above 24999/-    |  \r\n            7 Days Replacement | 6 Months Warranty   |  \r\n            32 point Quality tested',
    '            Contact Us <a href="tel:+919309248726">+91 93092 48726</a>   |  \r\n            Free delivery order above 24999/-    |  \r\n            7 Days Replacement | 6 Months Warranty   |  \r\n            32 point Quality tested'
)

# 11. Footer copyright
s = s.replace(
    '<p class="mb-2">© 2026 Powered by OmnyX IT Global PVT. LTD.</p>',
    '<p class="mb-2">&copy; 2026 Tech Life, Pune. All Rights Reserved.</p>'
)

# 12. Remove all nav links that go to laptopwale.in pages (make them # since this is standalone)
# Keep the structure but disable dead links
nav_links = [
    ('href="products"', 'href="#"'),
    ('href="new_laptop"', 'href="#"'),
    ('href="refurbished"', 'href="#"'),
    ('href="accessories"', 'href="#"'),
    ('href="valuation/valuation_form"', 'href="#"'),
    ('href="blogs"', 'href="#"'),
    ('href="cart"', 'href="#"'),
    ('href="login"', 'href="#"'),
    ('href="track-order"', 'href="#"'),
    ('href="index"', 'href="#"'),
    ('href="about"', 'href="#"'),
    ('href="contact"', 'href="#"'),
    ('href="shipping"', 'href="#"'),
    ('href="return_policy"', 'href="#"'),
    ('href="terms_conditions"', 'href="#"'),
    ('href="privacy_policy"', 'href="#"'),
    ('href="apple_laptops"', 'href="#"'),
    ('href="gaming_laptops"', 'href="#"'),
    ('href="business_laptops"', 'href="#"'),
    ('href="apple_laptops.php"', 'href="#"'),
    ('href="business_laptops.php"', 'href="#"'),
    ('href="gaming_laptops"', 'href="#"'),
    ('href="products.php?sort=&amp;brand%5B%5D=Apple"', 'href="#"'),
    ('href="products.php?sort=&amp;brand%5B%5D=Lenovo"', 'href="#"'),
    ('href="products.php?sort=&amp;brand%5B%5D=Dell"', 'href="#"'),
    ('href="products.php?sort=&amp;brand%5B%5D=HP"', 'href="#"'),
    ('href="products.php?sort=&amp;brand%5B%5D=Acer"', 'href="#"'),
    ('href="products.php?sort=&amp;brand%5B%5D=Asus"', 'href="#"'),
    ('href="products?max_price=15000"', 'href="#"'),
    ('href="products?max_price=30000"', 'href="#"'),
    ('href="products?max_price=40000"', 'href="#"'),
    ('href="product-details.php?id=94"', 'href="#"'),
    ('href="product-details.php?id=96"', 'href="#"'),
    ('href="product-details.php?id=100"', 'href="#"'),
    ('href="product-details.php?id=101"', 'href="#"'),
    ('href="product-details.php?id=103"', 'href="#"'),
    ('href="product-details.php?id=104"', 'href="#"'),
    ('href="product-details.php?id=105"', 'href="#"'),
    ('href="product-details.php?id=148"', 'href="#"'),
    ('href="product-details.php?id=149"', 'href="#"'),
    ('href="product-details.php?id=151"', 'href="#"'),
    ('href="product-details.php?id=152"', 'href="#"'),
    ('href="product-details.php?id=153"', 'href="#"'),
]
for old, new in nav_links:
    s = s.replace(old, new)

# 13. Facebook and YouTube links in footer - remove (not provided)
s = s.replace(
    '<a href="https://www.facebook.com/profile?id=100092259887663"><i class="fab fa-facebook-f"></i></a>',
    ''
)
s = s.replace(
    '<a href="https://www.youtube.com/@LaptopWale-f3r"><i class="fab fa-youtube"></i></a>',
    ''
)

open('index.html', 'wb').write(s.encode('utf-8'))
print('All fixes applied. Size=' + str(len(s)))
