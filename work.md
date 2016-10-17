---
layout: default
title: Recent Work
heading: Recent Work
permalink: /work/
---



<div>
  <h2 class="page-heading">Projects</h2>
  <p>Below are a few of my recent independent consulting projects. View more of my recent work at <a href="upstate.agency" target="_blank">Upstate Interactive</a>. I also have some code samples of front-end class projects on <a href="https://github.com/zoitsa" target="_blank">Github</a>.</p>
  <ul>
   {% assign sorted = (site.projects | sort: 'date') | reverse %}
   {% for item in sorted %}
        <li class="project">
          <span class="post-meta">{{ item.date | date: "%b %-d, %Y" }}</span>
          <h5>{{ item.title }}</i></a></h5>
          <p>Skills: {{ item.skills }}</p>
          {% if item.thumbnail-path%}
            <img src="{{ item.thumbnail-path }}" alt="{{ item.title }}"/>
          {% endif %}
          <p>{{ item.excerpt }}</p>
          <p> {{ item.video}}</p>
        </li>
  {% endfor %}
  </ul>
</div>