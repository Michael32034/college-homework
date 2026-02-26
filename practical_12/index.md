# Одинадцята практична робота

1.
```html
<!DOCTYPE html>
<html>
<body>
    <div id="task1">
      <p id="element" style="display: block">Some text</p>
      <button
        onClick=
          "((element)=>{
            element.style.display = element.style.display == 'block' ? 'none' : 'block'
            })(document.getElementById(`element`))">
        Hide text
      </button>
    </div>
    <div id="task2">
      <button
        id="button2"
        onClick="((element)=>{element.style.display = 'none'})(document.getElementById(`button2`))">
        Shy button
      </button>
    </div>
    <div id="task3">
      <div id="tree_father" class="tree">
        <div id="tree_child1" class="tree">
          <div id="tree_child11" class="tree">11</div>
          <div id="tree_child12" class="tree">12</div>
        </div>
        <div id="tree_child2" class="tree">
          <div id="tree_child21" class="tree">
            <div id="tree_child211" class="tree">211</div>
          </div>
        </div>
        <div id="tree_child3">3</div>
      </div>
    </div>
    <script>
      function hide_child(parent) {
        for (const children of parent.children) {
            hide_child(children);
            children.style.display =
            children.style.display == "block" ? "none" : "block";
        }
        }
        for (const i of document.getElementsByClassName("tree")){
          i.addEventListener("click", (ev)=>{hide_child(ev.currentTarget), ev.stopPropagation()})
        }
    </script>
    <style>
      .tree{
        display: block;
        border: 2px solid;
        padding: 45px;
      }
    </style>
</body>
</html>
```
