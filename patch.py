with open('index_backup.html', 'r', encoding='utf-8') as f:
    c = f.read()

old = '5th floor, Siddharth Building, Nehru Place, New Delhi, Delhi 110019</p>\n\n            </div>\n\n            \n\n        </div>\n    </div>\n</div>'

new_store = '''5th floor, Siddharth Building, Nehru Place, New Delhi, Delhi 110019</p>

            </div>

            <!-- TECH LIFE - PUNE -->
            <div class="col-6 col-md-3">
                <div class="location-tag mb-1 small fw-bold text-danger">
                    <i class="fa fa-store me-1"></i> PUNE
                </div>
                <div class="map-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.0!2d73.7506345!3d18.6059017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c195570be96d%3A0x46b9283d16c59472!2sTech%20Life!5e0!3m2!1sen!2sin!4v1"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
                <p class="store-address">Tech Life, Pune, Maharashtra &mdash; Certified Refurbished Laptops &amp; Chip-Level Repairs</p>
            </div>

        </div>
    </div>
</div>'''

if old in c:
    c = c.replace(old, new_store, 1)
    print('Store added OK')
else:
    print('Pattern not found')

demo = '<div style="background: linear-gradient(90deg, #1d1d1f, #2c3e50); color: #fff; padding: 6px 15px; font-size: 12px; text-align: center; display: flex; justify-content: center; align-items: center; gap: 10px; z-index: 9999; position: relative;">'
if demo in c:
    c = c.replace(demo, '<div style="display:none;">', 1)
    print('Demo bar hidden')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Done, size=' + str(len(c)))
