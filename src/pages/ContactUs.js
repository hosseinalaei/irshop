import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import StickyFooter from "@/components/Footer/StickyFooter";

const ContactUs = () => {
    return (
        <>
        <div class="page-wrapper">
        <main class="main">
            <div class="page-header">
                <div class="container">
                    <h1 class="page-title mb-0">تماس با ما</h1>
                </div>
            </div>

            <Breadcrumb />

            <div class="page-content contact-us">
                <div class="container">
                    <section class="content-title-section mb-10">
                        <h3 class="title title-center mb-3">اطلاعات تماس
                        </h3>
                        <p class="text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی,
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </section>

                    <section class="contact-information-section mb-10">
                        <div class=" swiper-container swiper-theme " data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 1,
                            'breakpoints': {
                                '480': {
                                    'slidesPerView': 2
                                },
                                '768': {
                                    'slidesPerView': 3
                                },
                                '992': {
                                    'slidesPerView': 4
                                }
                            }
                        }">
                            <div class="swiper-wrapper row cols-xl-4 cols-md-3 cols-sm-2 cols-1">
                                <div class="swiper-slide icon-box text-center icon-box-primary">
                                    <span class="icon-box-icon icon-email">
                                        <i class="w-icon-envelop-closed"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h4 class="icon-box-title">آدرس ایمیل </h4>
                                        <p>mail@example.com</p>
                                    </div>
                                </div>
                                <div class="swiper-slide icon-box text-center icon-box-primary">
                                    <span class="icon-box-icon icon-headphone">
                                        <i class="w-icon-headphone"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h4 class="icon-box-title">شماره تلفن </h4>
                                        <p>(123) 456-7890 / (123) 456-9870</p>
                                    </div>
                                </div>
                                <div class="swiper-slide icon-box text-center icon-box-primary">
                                    <span class="icon-box-icon icon-map-marker">
                                        <i class="w-icon-map-marker"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h4 class="icon-box-title">آدرس </h4>
                                        <p>ایران، ارومیه</p>
                                    </div>
                                </div>
                                <div class="swiper-slide icon-box text-center icon-box-primary">
                                    <span class="icon-box-icon icon-fax">
                                        <i class="w-icon-fax"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h4 class="icon-box-title">فکس </h4>
                                        <p>1-800-570-7777</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr class="divider mb-10 pb-1"/>

                    <section class="contact-section">
                        <div class="row gutter-lg pb-3">
                            <div class="col-lg-6 mb-8">
                                <h4 class="title mb-3">مردم معمولا اینها را می پرسند</h4>
                                <div class="accordion accordion-bg accordion-gutter-md accordion-border">
                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse1" class="collapse">چگونه می توانم سفارش خود را لغو کنم؟</a>
                                        </div>
                                        <div id="collapse1" class="card-body expanded">
                                            <p class="mb-0">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse2" class="expand">چرا ثبت نام من به تاخیر افتاد؟</a>
                                        </div>
                                        <div id="collapse2" class="card-body collapsed">
                                            <p class="mb-0">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse3" class="expand">برای خرید محصولات به چه چیزهایی نیاز دارم؟</a>
                                        </div>
                                        <div id="collapse3" class="card-body collapsed">
                                            <p class="mb-0">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse4" class="expand">چگونه می توانم سفارش را پیگیری کنم؟</a>
                                        </div>
                                        <div id="collapse4" class="card-body collapsed">
                                            <p class="mb-0">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header">
                                            <a href="#collapse5" class="expand">چگونه می توانم پول را پس بگیرم؟</a>
                                        </div>
                                        <div id="collapse5" class="card-body collapsed">
                                            <p class="mb-0">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-8">
                                <h4 class="title mb-3">ارسال پیام به ما</h4>
                                <form class="form contact-us-form" action="#" method="post">
                                    <div class="form-group">
                                        <label for="username">نام شما </label>
                                        <input type="text" id="username" name="username"
                                            class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="email_1">ایمیل شما</label>
                                        <input type="email" id="email_1" name="email_1"
                                            class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="message">پیام شما </label>
                                        <textarea id="message" name="message" cols="30" rows="5"
                                            class="form-control"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-dark btn-rounded">اکنون ارسال کنید </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>

                {/* <div class="google-map contact-google-map" id="googlemaps"></div> */}
            </div>
        </main>
        <Footer />
    </div>
    <StickyFooter />
        </>
      );
}
 
export default ContactUs;