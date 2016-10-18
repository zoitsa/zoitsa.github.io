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
            <a href="{{ post.external_url }}"><h5>{{ post.title }} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></h5></a>
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
