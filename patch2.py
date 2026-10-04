import re

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Find and replace the entire stores section
old = '''<div class="container-fluid bg-light py-5">
    <div class="container">
        <div class="text-center mb-4">
            <h2 class="fw-bold">Visit Our Stores</h2>
        </div>

        <div class="row g-3">

            <!-- BHOPAL -->
            <div class="col-6 col-md-3">
                <div class="location-tag mb-1 small fw-bold text-danger">
                    <i class="fa fa-store me-1"></i><a href="bhopal.php">BHOPAL</a>
                </div>

                <div class="map-wrapper">
                    <iframe src="https://www.google.com/maps?q=23.2343814,77.4352641&amp;z=15&amp;output=embed" width="100%" height="100%" style="border:0;" loading="lazy">
                    </iframe>
                </div>

                <p class="store-address">1st Floor, 52-A, in front of Hotel Sangat Regency, near Manohar Dairy, Zone-I, Maharana Pratap Nagar, Bhopal,M.P.</p>
            </div>

            <!-- INDORE -->
            <div class="col-6 col-md-3">
                <div class="location-tag mb-1 small fw-bold text-danger">
                    <i class="fa fa-store me-1"></i><a href="indore.php"> INDORE</a>
                </div>

                <div class="map-wrapper">
                    <iframe src="https://www.google.com/maps?q=22.7188128,75.8694092&amp;z=15&amp;output=embed" width="100%" height="100%" style="border:0;" loading="lazy">
                    </iframe>
                </div>

                <p class="store-address">First Floor, Yashwant Plaza, M-81, Railway Station Rd, Flim Colony, Chhoti Gwaltoli, Indore, M.P.</p>
            </div>
            <!-- RAIPUR (Coming Soon) -->
            <div class="col-6 col-md-3">
                <div class="location-tag mb-1 small fw-bold text-danger">
                    <i class="fa fa-store me-1"></i><a href="raipur.php"> RAIPUR</a>
                </div>

                <div class="map-wrapper">
                    <iframe src="https://www.google.com/maps?q=Samvet+Shikhar+Complex+Rajbandha+Maidan+Raipur+Chhattisgarh&amp;z=15&amp;output=embed" width="100%" height="100%" style="border:0;" loading="lazy">
                    </iframe>
                    
                </div>
                <p class="store-address">No.27, 1st Floor, Samvet shikhar beside Dainik bhaskar office, Raipur, Chattisgarh</p>

            </div>
            <!-- DELHI (Coming Soon) -->
            <div class="col-6 col-md-3">
                <div class="location-tag mb-1 small fw-bold text-danger">
                    <i class="fa fa-store me-1"></i><a href="delhi.php">DELHI</a>
                </div>

                <div class="map-wrapper">
                    <iframe src="https://www.google.com/maps?q=507+Siddharth+Building+Nehru+Place+New+Delhi+110019&amp;z=17&amp;output=embed" width="100%" height="100%" style="border:0;" loading="lazy">
                    </iframe>
                    
                </div>
            <p class="store-address">5th floor, Siddharth Building, Nehru Place, New Delhi, Delhi 110019</p>

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

new = '''<div class="container-fluid bg-light py-5">
    <div class="container">
        <div class="text-center mb-4">
            <h2 class="fw-bold">Visit Our Store</h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <div class="location-tag mb-2 small fw-bold text-danger text-center">
                    <i class="fa fa-store me-1"></i> PUNE &mdash; Tech Life
                </div>
                <div class="map-wrapper" style="height:350px; border-radius:15px; overflow:hidden; border:3px solid #fff; box-shadow:0 5px 15px rgba(0,0,0,0.1);">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.0!2d73.7506345!3d18.6059017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c195570be96d%3A0x46b9283d16c59472!2sTech%20Life!5e0!3m2!1sen!2sin!4v1"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
                <p class="store-address text-center mt-2">Tech Life, Pune, Maharashtra &mdash; Certified Refurbished Laptops &amp; Chip-Level Repairs</p>
            </div>
        </div>
    </div>
</div>'''

if old in c:
    c = c.replace(old, new, 1)
    print('Stores section replaced with Pune only')
else:
    print('Pattern not found - trying partial match')
    # fallback: find by landmark text
    start = c.find('<div class="container-fluid bg-light py-5">')
    end = c.find('</div>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sw')
    if start != -1 and end != -1:
        c = c[:start] + new + '\n' + c[end:]
        print('Fallback replace done')
    else:
        print('ERROR: could not find section')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Done, size=' + str(len(c)))
