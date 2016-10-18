---
layout: default-articles
title: Community
heading: Community
permalink: /community/
---


<div>

  <ul class="post-list">
    {% for post in site.community %}

      <li>
        <div class="row">
        <article>
          <div class="col-xs-12 col-sm-6">
          <h5>{{ post.title }}</h5>
          <p>{{ post.excerpt}}</p>
        </div> <!--col-->
          <div class="col-xs-12 col-sm-6">
          {% if post.thumbnail-path %}
            <img src="{{ post.thumbnail-path }}" alt="{{ item.title }}"/>
          </div> <!--col-->
          {% endif %}
        </article>
      </div> <!--row-->
      </li>
    {% endfor %}
  </ul>


</div>
