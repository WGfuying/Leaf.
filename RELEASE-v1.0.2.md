# Version 1.0.2 发行说明

月亮下，这片叶子把根扎得更深了些。

它不再只是好看，还终于好用了——裂缝被补上，手势顺了，书写落回了指尖。

- 纸张之形：暖米纸作底，圆润卡片与自然投影相映，明暗之间仍留一页安静
- 书写之流：编辑与预览合为一窗，Markdown 随手即现，开关收进笔尖之侧
- 三端之序：桌面、Pad 与手机各得其形，悬浮输入、就地编辑与左缘手势不再彼此掣肘
- 窗口之向：设置、关于与每日一叶随触发之处从左、右、上、下展开，贴近边界也不裁切，滚动之中仍认得归途
- 嵌套之门：面板之中再开面板，方向随父而行，手机上「关于」不再忽然自底部闯入
- 侧栏之开合：桌面新添收起开关，一叶可展可藏，主区随之让出或铺满
- 回收站之修复：恢复与彻底删除重新可点，提示文案各归其侧
- 手势之顺理：右滑建设、左滑破坏，三端从此统一——主页右滑置顶、左滑删除，已置顶者再右滑即现「取消置顶」；回收站右滑恢复、左滑彻底删除
- 弹窗之归位：设置标题不再悬浮遮字，头尾各安其位，正文独立滚动，退场重开也不再错乱
- 关于之全篇：「关于 Leaf.」补回句点，作者全文完整呈现，不再以缩略替代初心
- 配图之归仓：关于页的外链图片收进项目本地，Firefox 与 Edge 里也能安然呈现
- 图标之新色：暖米纸底色铺满图标，青色句点原样保留，缓存版本同步更新
- 卡片之轻：置顶与删除并入时间行，悬停不再凭空多出一条横线，卡片高度也不再跳动
- 回收站之静：回收站不再给新建入口——浮动的加号、手机输入坞与桌面顶部输入框一同收起，误写一笔便被弹回「全部 MEMO」的窘境就此消失
- 按钮之同色：置顶与恢复着青、删除与彻底删除着红，与滑动手势露出的提示共用一套语言，点与滑不再各说各话
- 滚动之瘦：灰色轨道槽退场，滑块收成 5 像素圆头，静止时淡、悬停时深，亮暗两套主题各自得体
- 搜索之统一：搜索框从侧栏搬到顶栏图标处，就地弹出、就地筛完，不再把人送进侧栏；手机上也终于不再借道抽屉——页面不变灰，结果不再躺在遮罩底下
- 搜索之生效：标签页与回收站里搜索同样管用，不再只认「全部 MEMO」而静默失效
- 卡片之读法：单击展开、双击进入编辑；长文展开后若跨越多屏，右下角浮出一颗收起钮，一点便收拢并带你回到卡片顶部
- 抽屉之景深：左缘滑动时页面缓缓后缩、渐隐，侧栏带着阴影推入，像一页纸从边上压过来
- 三点之收回：再点一次即收起，不再只开不合
- 滚动条之隐：默认藏起来，滑动时轻轻现身，停手九百毫秒后按同一段 240ms 淡出；卡片流、侧栏、设置、关于、回顾、编辑预览六处共用同一颗滑块，显隐既不占位也不推挤任何内容
- 侧栏之搜索：那一行不再是「弹窗开关」，原地就是输入框——键入即筛，回车收抽屉看结果，不再跳到另一个窗口里打字
- 侧栏之开关：两端统一为三条杠，开与合是同一个按钮、同一个位置，不再左右翻箭头让人以为它换了边
- 收起之稳重：连点悬浮收起钮不再误触展开或编辑，侧栏开关也加了 260ms 的呼吸，不再一点就抖
- 浮窗之空白：手机新建面板点空白处即收，不必再绕回「取消」
- 景深之连续：模糊随手指一路生长，与位移、透明度同一条进度线，不是滑到底才突然糊上一层
- 拖动之顺：侧栏遮罩改用固定半径的磨砂、只推透明度——半径不变，GPU 每帧只做一次卷积；页面不再逐帧重算整页模糊，真机拖动不再一顿一顿，也不再有「松手之后才糊」的错觉
- 退场之整：面板退场先保持纸面不透明地失焦后撤（前 62% 不动透明度），最后 38% 才溶解；遮罩同步收，背景不会先于面板「秒变清晰」。面板与遮罩同长同曲线，抽屉也并入同一档参数
- 提示之齐：toast 这类瞬时小条也走同一套景深（浮起 8px、4px 对焦、小体量档），全站再没有第二套弹出动画
- 一叶之标：「每日一叶」的星形换成一片端正的叶子，与 Leaf. 同名相应；星形在界面里本就专指收藏，用来表示「随机回顾一条旧 MEMO」是语义错位。旧图形的边界只有 16×14、中心还比格心高 3 个单位，在 18px 的图标框里既小一圈又往上飘；新叶为 17×19、正落在 (12,12)，与四格、垃圾桶齐平
- 搜索之标：占位文字定为完整一句「搜索 MEMO 和 #标签」——「#标签」属于正文，不再另挂到右侧徽标区；
  右端 `Ctrl K` 键帽恢复保留，且不参与收缩，220px 的窄侧栏里也不会被长文字顶掉。顶栏搜索浮层同步为同一句
- 退景之顺：模态遮罩的磨砂半径改为恒定 6px，只推透明度。旧版把 `blur(0 → 6 → 0)` 写进关键帧，
  半径每帧都变，整屏背景必须逐帧重新卷积、无法命中缓存，桌面视口越大越明显——从设置 / 关于返回时
  就会一顿一顿。现在与抽屉遮罩同一套做法，卷积结果可缓存，关闭后整层从渲染树摘除
- 面板之一套景深：侧栏抽屉、设置/关于/回顾、每日一叶、搜索浮层、新建浮窗——五类非全屏面板从此共用同一组参数。入场是「对焦」：纸面先落位，模糊从 12px 收干净，带着 26px 的位移、5.5% 的缩放与 1.2° 的透视；退场是「退层」：沿原轴收回七成行程，再化进背景。模糊、位移、缩放、透视严格同相，误差实测 0.0%
- 背景之一层退：面板起来时，遮罩不再只是一块灰——它一边压暗一边把身后的页面磨砂（0 → 6px），三层（页面、遮罩、面板）用同一条曲线推进，像镜头拉开而不是贴纸盖上
- 顶栏之不收：所有弹出面板打开时顶栏都不再收起，只随景深退到背景层；侧栏也照此办理。顶栏位置恒定，搜索浮层的锚点因此再不会被抽走
- 滚动条之柔：显隐统一为 340ms 长尾曲线，进出方向各带 2px 微位移，不再是「啪」一下掐断；停手九百毫秒后才开始退场，看的人来得及跟上
- 空态之名：搜索无结果时不再只说「没有匹配的 MEMO」，补成「没有匹配的 MEMO 和 #标签」，与搜索框的用词一致；副提示与回收站空态照旧
- 长文之可改：打开一篇长 MEMO 编辑，光标不再锁在末尾、窗格也不再卷到最底；桌面与 Pad 的卡片滑动手势不再吞掉编辑框的
  `mousedown`，点击定位、拖选、方向键导航与「点哪改哪」全部恢复，普通卡片上的左右滑动照旧
- 双引擎之证：Chromium 与 Gecko（Firefox）交叉验证，桌面、Pad 与手机的核心路径均无脚本报错

*「一叶落地，一念生根。」*

𝓫𝔂 𝓶.𝔁. 🌕

---

# Version 1.0.2 Release Note

Under the same moon, the leaf let its roots sink a little deeper.

It's no longer just pretty — it finally works: the cracks are mended, the gestures flow, and writing returns to your fingertips.

- The shape of paper: warm rice-paper tones, rounded cards and natural shadows, with a quiet page in both light and dark
- The flow of writing: editor and preview become one window, Markdown appears as you write, and its switch stays beside the pen
- Order across three ends: desktop, tablet and phone each find their form, with floating input, in-place editing and edge gestures no longer getting in one another's way
- The direction of windows: Settings, About and Daily Leaf open from the left, right, top or bottom of their trigger, uncut near the edges and still oriented inside scrolling containers
- The nested door: a panel opened within another inherits its parent's direction, so About no longer springs unexpectedly from the bottom on phones
- The sidebar's fold: a new desktop collapse switch lets the leaf open or hide, while the main stream yields or fills the space
- The trash repaired: Restore and Delete Forever respond again, with swipe hints on their proper sides
- Gestures set straight: build on the right, break on the left — pin with a right swipe, delete with a left one, and a pinned card offers “Unpin” when swiped right again; in the trash, right restores and left purges forever
- The panels restored: the Settings title no longer floats over text, header and footer stay in place, the body scrolls independently, and closing or reopening no longer goes astray
- The whole About: the missing dot returns to “About Leaf.”, and the author's full text is presented without abbreviation
- The image brought home: the About page's picture now ships inside the project itself, loading safely in Firefox and Edge alike
- The icon's new tone: a warm rice-paper background fills the icon, the cyan dot stays untouched, and cache versions move forward together
- The card, lightened: pin and delete move into the time row, so hovering no longer conjures a stray rule and the card no longer jumps in height
- The trash, kept quiet: no way to write in there — the floating plus, the phone input dock and the desktop's top box all withdraw, ending the odd bounce back to All Memos after a misplaced memo
- Buttons in one voice: pin and restore wear the cyan, delete and purge the warning red — the very language the swipe hints already speak, so tapping and swiping stop contradicting each other
- A thinner scroll: the grey track steps aside and the thumb thins to a 5-pixel rounded sliver, faint at rest and deeper under the cursor, tuned for both themes
- Search made one: the box leaves the sidebar for the header icon and opens right there, so nobody is sent off to the sidebar to type; on phones it no longer borrows the drawer — the page stays bright and results no longer sit under a scrim
- Search that works: it applies in tag views and in the trash too, instead of quietly doing nothing outside All Memos
- How cards read: a single click unfolds, a double click opens the editor; when an unfolded note runs past a screen, a floating button rises at the lower right to fold it and bring you back to its top
- The drawer's depth: dragging from the left edge makes the page recede and fade while the sidebar slides in with a shadow, like a sheet pressed in from the side
- The three dots release: tap them again and the actions fold away
- A scrollbar that hides: invisible at rest, it surfaces while you scroll and withdraws on the same 240ms curve after nine hundred milliseconds of stillness — one shared thumb for the stream, the sidebar, Settings, About, Daily Leaf and the editor preview, and showing it never shifts a single line
- Search in the sidebar: that row is an input again rather than a door to another window — type where you stand, press Enter and the drawer steps aside for the results
- One toggle, both ends: three lines on desktop as on the phone, the same button in the same place whether the leaf is open or folded, with no arrows flipping sides
- A steadier fold: rapid taps on the floating fold button no longer fall through into unfold or edit, and the sidebar switch takes a 260ms breath before it answers again
- A tap on blank space: the phone's writing dock now closes when you touch anywhere outside it, so Cancel is no longer the only way out
- Depth that keeps up: the blur grows with your finger on the very same progress line as the shift and the fade, instead of arriving in one sudden layer at the end
- A drag that holds: the drawer scrim now frosts at a fixed radius and only pushes its opacity — the kernel stays constant, the page is never re-filtered per frame, so the drag no longer stutters on a real phone and the blur no longer seems to arrive only after you let go
- An exit with its depth intact: the panel keeps its paper opaque while it goes out of focus and steps back (62% of the way), then dissolves in the last stretch; the scrim clears with it, so the page never snaps sharp ahead of the panel. Panel and scrim now share one duration and one curve, and the drawer has joined the same tier
- A voice for the small things: even the toast rides the same depth — rising 8px, focusing from 4px, on the small tier. There is no second animation system left anywhere
- A leaf for the daily leaf: the star beside Daily Leaf is now an upright leaf, answering the name Leaf. A star means favourite, not "pull up an old memo at random", so the old symbol was saying the wrong thing. It also filled only 16×14 units of its 24-unit box with its centre three units too high, which is why it looked small and adrift; the new leaf is 17×19, dead centre, and sits level with the grid and trash icons
- One line, one badge: the sidebar placeholder is now the full sentence "搜索 MEMO 和 #标签" — #标签 belongs to the copy, not to a badge on the right. The Ctrl K keycap is back and never shrinks, so even the 220px tablet sidebar cannot push it out; the header search popover carries the same wording
- An exit without the stutter: the modal scrim now frosts at a fixed 6px radius and animates only its opacity. The old keyframes interpolated blur(0 → 6 → 0), so the radius changed every frame and the whole viewport had to be re-convolved each time — the bigger the desktop window, the worse the hitch when coming back from Settings or About. It is now the same fixed-radius trick as the drawer scrim: the convolution can be cached, and the whole layer leaves the render tree once closed
- One depth for every panel: the sidebar drawer, Settings / About / Daily Leaf, the search popover and the phone's writing dock now share a single set of numbers. Entering is a focus pull — the sheet lands first, then the blur clears from 12px to nothing, carried by a 26px shift, a 5.5% scale and a 1.2° tilt; leaving is a step back — seventy percent of the way home, then into the background. Blur, shift, scale and tilt stay in phase, measured at 0.0% drift
- A background that steps back: the scrim no longer just greys the page — it dims and frosts it (0 to 6px) at the same time, so page, scrim and panel advance on one curve together, more like a lens opening than a sticker being laid down
- A header that stays: no popup folds it away any more, the sidebar included; it keeps its place and recedes into the depth, so the search popover never loses the point it hangs from
- A softer scrollbar: showing and hiding now share one 340ms long-tail curve, with a 2px drift in either direction, instead of being snipped off; and it waits nine hundred milliseconds of stillness before it begins to go
- An empty state that names both: a search with no results now reads "没有匹配的 MEMO 和 #标签" instead of just "没有匹配的 MEMO", matching the wording of the search field. The smaller hint and the trash empty state are unchanged
- Long memos are editable again: opening a long card no longer parks the caret at the very end and scrolls the field to the bottom, and the card swipe gesture no longer swallows mousedown on the editor's textarea. Clicking to place the caret, drag selection, arrow-key navigation and editing in the middle all work; swiping an ordinary card still does what it did
- Proven on two engines: Chromium and Gecko (Firefox) cross-checked, with no script errors across the core desktop, tablet and phone paths

*"A falling leaf, a growing thought."*

𝓫𝔂 𝓶.𝔁. 🌕
