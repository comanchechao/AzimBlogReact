import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          // general translations
          sunGlasses: "Sunglasses",
          lenses: "Lenses",
          eyeGlasses: "Eyeglasses",
          stock: "stock",
          premiumBrands: "Premium Brands",
          blogs: "Blogs",
          home: "Home",
          login: "Login",
          signUp: "Sign Up",
          signIn: "Sign In",
          createAccount: "Create A New Account",
          loginSuccess: "You have successfully logged in",
          signUpSuccess: "You have successfully signed up",
          signOutSuccess: "You have successfully signed out",
          addToCart: "Add to Cart",
          productDetail: "Product Detail",

          // footer translations
          findUs: "Find Us on Social Media",
          findMap: "Our Location on the Map",
          design: "Design and Developement by",
          Greez: "Greez",
          Chao: "Chao",

          // main page translations
          azim: "Azim",
          eyewear: "Eyewear",
          shopNow: "Shop Now",
          find: "Find Your Best Fit For Glasses",
          specialOffer: "Special Offer",
          mostMen: "Most Popular Men Glasses",
          mostWomen: "Most Popular Women Glasses",
          showMe: "Show Me",
          newestSunglasses: "Our Newest Sunglasses",
          tailorMade: "Tailor Made For You",
          shopBy: "Shop By",
          frameShape: "Frame Shape",
          faceShape: "Face Shape",
          // shoppingpage translations
          choose: "Choose Your Filters",
          filters: "Filters",
          price: "Price",
          brands: "Brands",
          genders: "Genders",
          women: "Women",
          men: "Men",
          unisex: "Unisex",
          kids: "Kids",
          shape: "Shape",
          material: "Material",
          size: "Size",
          rim: "Rim",
          feature: "Feature",
          // blog page translations
          blogPageHeader: "latest on eyewaer",
          recentArticles: "recent articles",
          // admin page translations
          blogManagement: "Blog Management",
          salesManagement: "Sales Management",
          back: "Back",
          newBlog: "New Blog",
          // frame page translations
          easily: "Easily Find The Best Glasses By Frame Shape",
          pairFind: "Find The Best Pair For You",
          polygon: "Polygon",
          horn: "Horn",
          round: "Round",
          square: "Square",
          rectangle: "Rectangle",
          catEye: "Cat-Eye",
          aviator: "Aviator",
          browline: "Browline",
          // face page translations
          comfortabely: "Comfortabely Shop By Your Face Shape",
          explore:
            "Explore our glasses by face shape and find the right pair for you.",
          roundExplanation:
            "A round face is typically as wide as it's long without a prominent cheekbone.",
          oval: "Oval",
          ovalExplanation:
            "An oval face is proportionally balanced with a slightly curved jawline that is a bit narrower than the forehead.",
          squareExplanation:
            "A square face typically has a wide forehead with a wide, angular jawline.",
          diamond: "Diamond",
          diamondExplanation:
            "A diamond-shaped face is characterized by prominent cheekbones with a narrower forehead and an angular jawline.",
          pear: "Pear",
          pearExplanation:
            "A pear-shaped face tends to have a broader jawline with less prominent cheekbones and a narrow forehead.",
          heart: "Heart",
          heartExplanation:
            "A heart-shaped face typically has a broader forehead with a narrow chin and prominent cheekbones.",
          // productDetail translations
          selectColors: "Select Colors",
          selectSize: "Select Size",
          selectLens: "Select Lens",

          // lensSelect translations
          lensSelect: "Lens Select",
          prescription: "Prescription",
          prescriptionDetail:
            "Used for nearsightedness, farsightedness, astigmatism or presbyopia.",
          non: "Non-Prescription",
          nonDetail: "Used for fashion or eye protection",
          left: "Left eye",
          right: "Right eye",
          clear: "Clear",
          clearDetail:
            "(Traditional, transparent lenses perfect for everyday use)",
          blueLight: "Blue-light Blocking",
          blueDetail: "(Clear lens, for everyday use with digital devices)",
          driving: "Driving",
          drivingDetail: "(Safer driving day and night)",
          tint: "Tint",
          tintDetail:
            "(Permanently colored. Tint strength: light 20%, dark 80%)",
          photo: "Photochromic",
          photoDetail: "(Clear indoor, darken outside)",
          polarized: "Polarized",
          polarizedDetail: "(Reduce glare from shiny surfaces)",
          confirm: "Confirm",
          goBack: "Go Back",

          // CheckoutPage translations
          checkout: "Checkout",
          shippingAddress: "1.Shipping Address",
          email: "Email",
          fullName: "Full Name",
          country: "Country",
          address: "Address",
          city: "City",
          state: "State/Province",
          phone: "Phone",
          shippingMethod: "2.Shipping Method",
          post: "Post",
          express: "Express",
          proceed: "Proceed To Payment",

          // shapes

          Round: "Round",
          Square: "Square",
          Polygon: "Polygon",
          Rectangle: "Rectangle",
          Horn: "Horn",
          Aviator: "Aviator",
          Oval: "Oval",
          Cat: "Cat",
        },
      },
      fa: {
        translation: {
          // general translations
          sunGlasses: "???????? ????????????",
          lenses: "??????",
          eyeGlasses: "???????? ??????",
          stock: "????????????",
          premiumBrands: "????????",
          blogs: "??????????",
          home: "????????",
          login: "????????",
          signUp: "?????? ??????",
          signIn: "????????",
          createAccount: "???????? ???????? ????????",
          loginSuccess: "?????? ???? ???????????? ???????? ????????",
          signUpSuccess: "???????? ?????????? ?????? ?????? ???????????????? ???? ???? ????????",
          signOutSuccess: "???????? ???????????? ???????? ??????",
          addToCart: "?????????? ????",
          productDetail: "???????????? ??????????",
          // footer translations
          findUs: "???? ???? ???? ???????? ?????? ?????????????? ???????? ????????",
          findMap: "???????????? ???? ?????? ????????",
          design: "?????????? ?? ?????????? ?? ???????? ????????",
          Greez: "????????",
          Chao: "????????",

          // main page translations
          azim: "????????",
          eyewear: "????????",
          shopNow: "????????",
          find: "???????????? ???????? ???????? ?????????? ???????? ????????",
          specialOffer: "?????????????? ????????",
          mostMen: "?????????? ???????? ???????? ?????? ????????????",
          mostWomen: "?????????? ???????? ???????? ?????? ??????????",
          showMe: "?????????? ??????",
          newestSunglasses: "???????????????? ???????? ?????? ??????????????????",
          tailorMade: "?????????? ?????? ???????? ??????",
          shopBy: " ???????? ???? ????????",
          frameShape: " ?????? ??????????",
          faceShape: " ???????? ????????",
          // shoppingpage translations
          choose: "???????????????????? ???? ???????????? ????????",

          filters: "??????????????",
          price: "????????",
          brands: "????????????",
          genders: "??????????",
          women: "??????????",
          men: "????????????",
          unisex: "??????????????",
          kids: "?????? ????????",
          shape: "?????? ??????????",
          material: "??????",
          size: "????????",
          rim: "?????? ??????????",
          feature: "?????????????? ??????????",

          // blog page translations
          blogPageHeader: "???????? ???????? ?????? ????????",
          recentArticles: "?????????? ?????????? ????",
          // admin page translations
          blogManagement: "???????????? ????????",
          salesManagement: "???????????? ????????",
          back: "??????????",
          newBlog: "????????????",

          // frame page translations
          easily: "???? ?????????? ???????????? ???????? ???? ???? ???????? ?????? ?????????? ???????????? ????????",
          pairFind: "???????? ???????? ???????????? ???? ???????????? ????????",
          polygon: "??????????????",
          horn: "????????????",
          round: "????????",
          square: "??????????",
          rectangle: "??????????????",
          cat: "????????",
          aviator: "????????????",
          browline: "????????????",

          // face page translations
          comfortabely:
            "???? ?????????? ???? ???????? ???????? ???????? ???????????? ?????????????? ???? ???????????? ????????",
          explore:
            "???????? ???? ???? ???? ???????? ???????? ???????? ?????? ???????? ?? ???????????? ???? ???????? ???????????? ???????????? ????????",
          roundExplanation:
            "???? ???????? ?????? ???????????? ?????? ?? ?????? ???????????? ???????????? ???????? ?? ???????? ???? ???????? ???????? ????????????",
          oval: "????????",
          ovalExplanation:
            "???? ???????? ???????? ???????????? ???????? ???????????? ???????? ?? ?????? ?????????? ?????? ????????",
          squareExplanation:
            "???? ???????? ?????????? ???????????? ???????????? ?????????? ???????? ?? ?????? ?????? ????????",
          diamond: "????????????",
          diamondExplanation:
            "???? ???????? ???????????? ???????????? ???????? ?????????? ?????????? ???? ???????? ?????? ?????? ?? ???????? ???????? ????????",
          pear: "??????????",
          pearExplanation:
            "???? ???????? ?????????? ?????? ???????????? ???????????? ???????? ?????????? ???? ???????? ???????? ?????? ?? ???????? ???????? ????????",
          heart: "????????",
          heartExplanation:
            "???? ???????? ???????? ???????????? ???????????? ?????? ?? ???? ?????????? ?????? ?? ???????? ????????",
          // productDetail translations
          selectColors: "???????????? ??????",
          selectSize: "???????????? ????????",
          selectLens: "???????????? ??????",
          // lensSelect translations
          lensSelect: "???????????? ??????",
          prescription: "???? ????????",
          prescriptionDetail: "???????? ???????????????? ?????????? ?????????? ???????????????? ?? ??????????????",
          non: "???????? ????????",
          nonDetail: "???????? ???????????? ???? ?????? ???? ????????????",
          left: "?????? ????",
          right: "?????? ????????",
          clear: "????????",
          clearDetail: "(?????? ?????? ???????? ?? ???? ?????? ???????? ?????????????? ?? ????????????)",
          blueLight: "?????????? ?????? ??????",
          blueDetail: "(???????? ?????? ???? ?????????? ??????????????)",
          driving: "??????????????",
          drivingDetail: "(???????? ?????????????? ?????? ???? ???? ???? ?? ??????)",
          tint: "????????",
          tintDetail: "(?????? ?????????????????? ???? ???????????? ????????)",
          photo: "??????????????????",
          photoDetail: "(???????? ???? ???????? ?????????? ???????? ???? ???????? ????????)",
          polarized: "??????????????",
          polarizedDetail: "(???? ???????? ???????????? ?????? ???? ???????? ????????)",
          confirm: "??????????",
          goBack: "?????????? ?? ??????",
          // CheckoutPage translations
          checkout: "?????????? ????????",
          shippingAddress: "???????? ??????????",
          email: "??????????",
          fullName: "?????? ????????",
          country: "????????",
          address: "????????",
          city: "??????",
          state: "??????????",
          phone: "?????????? ?? ????????",
          shippingMethod: "?????? ??????????",
          post: "?????? ????????????",
          express: "??????",
          proceed: "?????????? ???? ?????????? ????????????",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
