<block wx:if="{{text}}"><view data-event-opts="{{[['tap',[['onClick']]]]}}" class="{{['uni-tag',disabled===true||disabled==='true'?'uni-tag--disabled':'',inverted===true||inverted==='true'?'uni-tag--inverted':'',circle===true||circle==='true'?'uni-tag--circle':'',mark===true||mark==='true'?'uni-tag--mark':'','uni-tag--'+size,'uni-tag--'+type]}}" bindtap="__e">{{''+text+''}}</view></block>