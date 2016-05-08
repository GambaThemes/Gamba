call rename assets\css assets\_css
call harp compile
call rename assets\_css assets\css
call lessc assets\css\layout.less www\assets\css\layout.css
call lessc assets\css\components.less www\assets\css\components.css
call lessc assets\css\responsive.less www\assets\css\responsive.css