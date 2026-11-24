import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

interface JewelryItem {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="jewelry-app">
      <!-- Header -->
      <header class="header">
        <nav class="nav">
          <div class="nav-container">
            <div class="logo">
              <h2>Elegance Jewelry</h2>
            </div>
            <ul class="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#featured">Featured</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="nav-toggle" (click)="toggleMenu()">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      <!-- Hero Section -->
      <section id="home" class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Exquisite Jewelry Collection</h1>
          <p class="hero-subtitle">Discover timeless elegance and modern sophistication</p>
          <button class="cta-button">Explore Collection</button>
        </div>
        <div class="hero-image">
          <img src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Luxury Jewelry" />
        </div>
      </section>

      <!-- Categories Section -->
      <section id="categories" class="categories">
        <div class="container">
          <h2 class="section-title">Our Categories</h2>
          <div class="categories-grid">
            <div class="category-card" *ngFor="let category of categories">
              <div class="category-image">
                <img [src]="category.image" [alt]="category.name" />
              </div>
              <div class="category-content">
                <h3>{{ category.name }}</h3>
                <p>{{ category.description }}</p>
                <a href="#" class="category-link">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products -->
      <section id="featured" class="featured">
        <div class="container">
          <h2 class="section-title">Featured Products</h2>
          <div class="products-grid">
            <div class="product-card" *ngFor="let product of featuredProducts">
              <div class="product-image">
                <img [src]="product.image" [alt]="product.name" />
                <div class="product-overlay">
                  <button class="quick-view">Quick View</button>
                </div>
              </div>
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p class="product-category">{{ product.category }}</p>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-price">{{ product.price }}</div>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>Craftsmanship & Excellence</h2>
              <p>For over three decades, Elegance Jewelry has been synonymous with exceptional quality and timeless beauty. Our master craftsmen combine traditional techniques with contemporary design to create pieces that celebrate life's most precious moments.</p>
              <p>Each piece in our collection is carefully selected and crafted with the finest materials, ensuring that every jewelry item tells its own unique story of elegance and sophistication.</p>
              <ul class="about-features">
                <li>✨ Premium Materials Only</li>
                <li>✨ Expert Craftsmanship</li>
                <li>✨ Lifetime Warranty</li>
                <li>✨ Custom Design Services</li>
              </ul>
            </div>
            <div class="about-image">
              <img src="https://images.pexels.com/photos/1416734/pexels-photo-1416734.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Jewelry Crafting" />
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="newsletter">
        <div class="container">
          <div class="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for exclusive offers and new collection updates</p>
            <div class="newsletter-form">
              <input type="email" placeholder="Enter your email" class="email-input">
              <button class="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer id="contact" class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Elegance Jewelry</h3>
              <p>Creating timeless pieces that celebrate your most precious moments.</p>
              <div class="social-links">
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Twitter</a>
              </div>
            </div>
            <div class="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#featured">Featured</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Customer Service</h4>
              <ul>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Care Instructions</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Warranty</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Contact Info</h4>
              <p>📍 123 Jewelry District, NYC 10001</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info&#64;elegancejewelry.com</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2025 Elegance Jewelry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class App {
  menuOpen = false;

  categories = [
    {
      name: 'Rings',
      description: 'Engagement, wedding, and statement rings',
      image: 'https://images.pexels.com/photos/1232302/pexels-photo-1232302.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Necklaces',
      description: 'Elegant chains and pendant necklaces',
      image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Earrings',
      description: 'Studs, hoops, and drop earrings',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Bracelets',
      description: 'Tennis bracelets and charm collections',
      image: 'https://images.pexels.com/photos/1454157/pexels-photo-1454157.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  featuredProducts: JewelryItem[] = [
    {
      id: 1,
      name: 'Diamond Solitaire Ring',
      category: 'Rings',
      price: '$2,999',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Classic solitaire with 1.5ct diamond'
    },
    {
      id: 2,
      name: 'Pearl Drop Necklace',
      category: 'Necklaces',
      price: '$899',
      image: 'https://images.pexels.com/photos/1416734/pexels-photo-1416734.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Elegant freshwater pearl necklace'
    },
    {
      id: 3,
      name: 'Rose Gold Hoops',
      category: 'Earrings',
      price: '$599',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '18k rose gold hoop earrings'
    },
    {
      id: 4,
      name: 'Tennis Bracelet',
      category: 'Bracelets',
      price: '$1,499',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Diamond tennis bracelet in white gold'
    },
    {
      id: 5,
      name: 'Sapphire Pendant',
      category: 'Necklaces',
      price: '$1,299',
      image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Blue sapphire with diamond halo'
    },
    {
      id: 6,
      name: 'Vintage Brooch',
      category: 'Accessories',
      price: '$799',
      image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Art deco inspired vintage brooch'
    }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

bootstrapApplication(App);