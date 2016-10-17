---
layout: sidebar
---

<!DOCTYPE html>
<html>

  {% include head.html %}

  <body>

    {% include header.html %}


    <div class-"row">
    <div class="col-md-8 page-content">
      <div class="wrapper">
        {{ content}}
      </div>
    </div>

    <div class="col-md-4">
      
      {% include articles.html %}

    </div>
  </div><!--row-->


    {% include footer.html %}

  </body>

</html>