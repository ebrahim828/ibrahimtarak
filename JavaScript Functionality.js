// بيانات الشهادات (يمكنك استبدالها بالروابط الفعلية للصور)
const certificates = {
    education: [
        '/api/placeholder/300/200',
        '/api/placeholder/300/200',
    ],
    training: [
        '/api/placeholder/300/200',
        '/api/placeholder/300/200',
        '/api/placeholder/300/200',
    ],
    experience: [
        '/api/placeholder/300/200',
        '/api/placeholder/300/200',
    ]
};

// دالة لإضافة الشهادات إلى القسم المخصص
function loadCertificates() {
    // إضافة شهادات المؤهلات
    const educationCerts = document.getElementById('education-certs');
    certificates.education.forEach(cert => {
        const img = createCertificateImage(cert);
        educationCerts.appendChild(img);
    });

    // إضافة شهادات الدورات التدريبية
    const trainingCerts = document.getElementById('training-certs');
    certificates.training.forEach(cert => {
        const img = createCertificateImage(cert);
        trainingCerts.appendChild(img);
    });

    // إضافة شهادات الخبرة
    const experienceCerts = document.getElementById('experience-certs');
    certificates.experience.forEach(cert => {
        const img = createCertificateImage(cert);
        experienceCerts.appendChild(img);
    });
}

// دالة إنشاء عنصر الصورة مع الخصائص المطلوبة
function createCertificateImage(src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'شهادة';
    img.className = 'certificate-img';
    
    // إضافة خاصية تكبير الصورة عند الضغط عليها
    img.addEventListener('click', function() {
        openImageModal(this.src);
    });
    
    return img;
}

// دالة فتح نافذة منبثقة لعرض الصورة بحجم أكبر
function openImageModal(src) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    
    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.objectFit = 'contain';
    
    modal.appendChild(img);
    
    modal.addEventListener('click', function()