import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div class="content">
                <div class="left box">
                    <div class="upper">
                        <div class="topic">About us</div>
                        <p>As a travel agency, we are dedicated to providing our customers with unforgettable travel experiences. Whether it's a romantic getaway, an adventure-packed trip, or a relaxing vacation, our team of experts is committed to helping you plan and book the perfect itinerary. Contact us today to start your next adventure!</p>
                    </div>
                    <div class="lower">
                        <div class="topic">Contact us</div>
                        <div class="phone">
                            <a href="/"><i class="fas fa-phone-volume"></i>+007 9089 6767</a>
                        </div>
                        <div class="email">
                            <a href="mailto:zainansarp41@gmal.com"><i class="fas fa-envelope"></i>zainansarp41@gmal.com</a>
                        </div>
                    </div>
                </div>
                <div class="middle box">
                    <div class="topic">Our Services</div>
                    <div><a href="/">Customized travel planning</a></div>
                    <div><a href="/">Flight and hotel booking</a></div>
                    <div><a href="/">Tour packages</a></div>
                    <div><a href="/">Travel insurance</a></div>
                    <div><a href="/">24/7 customer support</a></div>
                </div>
                <div class="right box">
                    <div class="topic">Subscribe us</div>
                    <form action="/">
                        <div class="media-icons">
                            <a href="/"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://instagram.com/zain.ansari439?igshid=ZDdkNTZiNTM="><i class="fab fa-instagram"></i></a>
                            <a href="/"><i class="fab fa-twitter"></i></a>
                            <a href="/"><i class="fab fa-youtube"></i></a>
                            <a href="https://www.linkedin.com/in/zain-ansari-ab5b0522b"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </form>
                </div>
            </div>
            <div class="bottom">
                <p>Copyright © 2020 <a href="https://github.com/zainansar41/">Zain Ul Abidin</a> All rights reserved</p>
            </div>
        </footer>
    )
}
