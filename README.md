# Demo Pages for CSS Contain Property

>The CSS contain property indicates that the element’s subtree is independent of the rest of the page. This enables heavy optimizations by user agents when used well.
>
>Source: https://drafts.csswg.org/css-containment/

With the new CSS Containment Property, Developers can inform the browser about scope of an element's styles, layout and paint, depending on which the browser can optimize its Render Pipeline.

The CSS contain property has landed in Chrome 52 and in Opera 40 and is [coming soon to Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1150081).


## Un-optimized Example
There are three divs: `.parent-div`, `.child-div` & `.unaffected-div`. The `.child-div` is absolutely positioned and we will be moving it using the `left` property. This is not as efficient as `transform: translateX()`, but it helps us in seeing improvement when we apply containment.


## How to measure improvement
1. Open Chrome Developer Tools.
2. Go to Timeline tab.
3. Hit Record ● (or ⌘ + E / Ctrl + E)
4. Click Animate Me Button
5. Stop Recording and zoom into frame and individual process and see time taken.


## contain: layout
- With `contain:layout`, the developer specifies that any changes to any descendant of this element will not affect the layout of any outside element and vice versa. So the browser only computes positions of the internal elements if they are modified and the rest of the DOM stays as is. So this means that Layout process in the animation frame render pipeline which we saw earlier will speed up.
- This gives Highest Performance Benefit amongst all other containment values.


## contain: paint
- With `contain: paint`, you specify that no descendant will display outside the elements bounds. Think of it as `overflow:hidden`.
- Now `position: absolute` or `position: fixed` elements are positioned relative to their first non statically positioned ancestor. But if there is a closer ancestor with contain:paint, they will be positioned relative to that element.
- `z-index` property for this element will work even if it is `position: static`.
- Plus it the element will be pushed to a different layer in the “Paint” process of the animation pipeline.


## contain: size
- `contain: size` means that this component’s size is set and no descendant will modify its size.
- If you don’t specify the size dimensions width & height, the element will be rendered empty i.e. 0 by 0 pixels
- This containment value does not give much performance boost but rather is just an additional level of containment.


## contain: style
- `contain: style` means that any descendant’s styles will not affect outside elements.
- In CSS, i.e. "Cascading Style Sheets" which means properties get trickled down, not the other way round, this property is not that important.
- But one example where it can help is CSS Counters where changes inside won’t get propagated outside.
- Bear in mind that this is in no way associated to scoped styling that you get from Shadow DOM


## contain: strict
- Equivalent to `contain: layout paint size style`
- So its a shorthand combination of all four values given above.
- Highest Containment Optimization if dimensions are set.


## contain: content
- Equivalent to `contain: layout paint style`
- This is the one which you should use in most cases, because its not as limiting as `contain: strict`


If you find any mistake in the above explanation or demo, feel free to [raise an issue](https://github.com/termvader/css-contain/issues/new) or [fork & suggest changes](https://github.com/termvader/css-contain)
