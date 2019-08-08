---
layout: home
---
<div id="about" class="section">
<div class="jumbotron paral paralabout">
<h1>About Us</h1>
</div>
</div>

<div class="container">
{% include about.html %}
</div>

{% include smpv.html %}

<div id="products" class="section">
<div class="jumbotron paral paralproducts">
<h1>Products</h1>
</div>
</div>

<div class="container">
{% include products.html %}
</div>

<div id="research" class="section">
<div class="jumbotron paral paralresearch">
<h1>Research</h1>
</div>
</div>

{% include research/index.html %}

<div id="team" class="section">
<div class="jumbotron paral paralteam">
  <h1>Our Team</h1>
</div>
</div>

{% include team/founders.html %}

{% include team/management.html %}


<div id="contact" class="section">
<div class="jumbotron paral paralcontact">
  <h1>Contact Us</h1>
</div>

{% include contact.html %}

