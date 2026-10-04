x = open('index.html', 'rb').read()
s = x.decode('utf-8')

start_marker = '\r\n\r\n<!-- VIDEO REVIEW SECTION -->'
end_marker = '\r\n<div class="container-fluid bg-light py-5">'

start = s.find(start_marker)
end = s.find(end_marker)

if start != -1 and end != -1:
    s = s[:start] + '\r\n' + s[end:]
    print('Reviews section removed OK')
    print('Removed chars:', end - start)
else:
    print('ERROR: start=%d end=%d' % (start, end))

open('index.html', 'wb').write(s.encode('utf-8'))
print('Done, size=' + str(len(s)))
