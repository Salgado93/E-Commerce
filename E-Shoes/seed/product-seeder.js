var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://www.adidas.com.ph/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dwc78be248/zoom/C77124_01_standard.jpg?sh=600&strip=false&sw=600',
        title:'Adidas',
        description:'Adidas superstar original',
        price: 30
    }),
    
        new Product({
        imagePath: 'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/ab12ced1d0a14151b88ea7fa00ee94a1_9366/Tenis_Superstar_Negro_B27140_01_standard.jpg',
        title:'Adidas',
        description:'Adidas superstar black',
        price: 32
    }),
    
        new Product({
        imagePath: 'https://http2.mlstatic.com/zapatillas-adidas-superstar-importadas-blancas-tornasoladas-D_NQ_NP_745841-MLA31082892920_062019-Q.jpg',
        title:'Adidas',
        description:'Adidas superstar blue-white',
        price: 40
    }),
            
        new Product({
        imagePath: 'https://render.nikeid.com/ir/render/nikeidrender/AM1ESSFA18_v9?obj=/s/g17&color=f6f1e4&show&obj=/s/g18&color=f6f1e4&show&obj=/s/g19&color=fffdf1&show&obj=/s/g5&color=c5c2ca&show&obj=/s/g6&color=f9fafb&show&obj=/s/g7&color=fffceb&show&obj=/s/g8&color=c4cae4&show&obj=/s/g10&color=fffdff&show&obj=/s/g1/mesh&color=fffdfc&show&obj=/s/g2/suede&color=f0e7d9&show&obj=/s/g3/leather&color=141414&show&obj=/s/g4/leather&color=314f49&show&obj=/s/g9&color=ffffff&show&obj=/s/g12/solid&color=1a1b1b&show&obj=/s/g13&color=204d4c&show&obj=/s/g20&color=ffffff&show&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB&sharpen=1&op_usm=0.5,1.2,0&posN=0,-0.1&sharpen=1&op_usm=0.5,1.2,0&posN=0,-0.1&fmt=png-alpha&wid=2000&fmt=png-alpha&wid=640',
        title:'Nike',
        description:'Nike air max',
        price: 25
    }),
    
        new Product({
        imagePath: 'https://stockx.imgix.net/Nike-Air-Force-1-Low-Utility-White-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1546587406',
        title:'Nike',
        description:'Nike air force',
        price: 28
    }),
            
        new Product({
        imagePath: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/qhvafq7y9nozo3d7worb/cortez-basic-sl-zapatillas-nino-a-0nTgVYRo.jpg',
        title:'Nike',
        description:'Nike cortez',
        price: 20
    })
];

var done = 0;
for(var i=0; i<products.length;i++){
    products[i].save(function(err, result){
        done++;
        if(done===products.length){
           exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}



















