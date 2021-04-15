Object.assign(window.search, {"doc_urls":["virtual_memory/index.html#virtual-memory","virtual_memory/replacement_policy.html#replacement-policy","virtual_memory/replacement_policy.html#basic-algorithms","virtual_memory/replacement_policy.html#optimal","virtual_memory/replacement_policy.html#least-recently-used-lru","virtual_memory/replacement_policy.html#first-in-first-out-fifo","virtual_memory/replacement_policy.html#clock","virtual_memory/replacement_policy.html#example","virtual_memory/replacement_policy.html#unfrequent-algorithms","virtual_memory/replacement_policy.html#improved-clock","virtual_memory/replacement_policy.html#least-frequently-used","virtual_memory/replacement_policy.html#belady-anamoly"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":4,"title":2},"1":{"body":0,"breadcrumbs":6,"title":2},"10":{"body":41,"breadcrumbs":6,"title":2},"11":{"body":7,"breadcrumbs":6,"title":2},"2":{"body":0,"breadcrumbs":6,"title":2},"3":{"body":11,"breadcrumbs":5,"title":1},"4":{"body":20,"breadcrumbs":7,"title":3},"5":{"body":8,"breadcrumbs":8,"title":4},"6":{"body":51,"breadcrumbs":5,"title":1},"7":{"body":2,"breadcrumbs":5,"title":1},"8":{"body":0,"breadcrumbs":6,"title":2},"9":{"body":126,"breadcrumbs":6,"title":2}},"docs":{"0":{"body":"","breadcrumbs":"Virtual Memory » Virtual Memory","id":"0","title":"Virtual Memory"},"1":{"body":"","breadcrumbs":"Virtual Memory » Replacement Policy » Replacement Policy","id":"1","title":"Replacement Policy"},"10":{"body":"Replace the block in the set that has experienced the fewest references. could be implemented by associating a counter with each block. When a block is brought in, it is assigned a count of 1; with each reference to the block, its count is incremented by 1. When replacement is required, the block with the smallest count is selected. Make poor replacement choices when certain blocks are referenced relatively infrequently overall, but frequently in some short intervals.","breadcrumbs":"Virtual Memory » Replacement Policy » Least Frequently Used","id":"10","title":"Least Frequently Used"},"11":{"body":"Conficts between the FIFO algorithm and the memory dynamic feature.","breadcrumbs":"Virtual Memory » Replacement Policy » Belady Anamoly","id":"11","title":"Belady Anamoly"},"2":{"body":"","breadcrumbs":"Virtual Memory » Replacement Policy » Basic Algorithms","id":"2","title":"Basic Algorithms"},"3":{"body":"Selects for replacement that page for which the time to the next reference is the longest. Impossible to implement Benchmark algorithm","breadcrumbs":"Virtual Memory » Replacement Policy » Optimal","id":"3","title":"Optimal"},"4":{"body":"Replaces the page in memory that has not been referenced for the long time. Does nearly as well as the optimal policy. Implement by linked list or stack, ordered by visit time, with high time complexity.","breadcrumbs":"Virtual Memory » Replacement Policy » Least recently used (LRU)","id":"4","title":"Least recently used (LRU)"},"5":{"body":"Process as a circular buffer May cause belady anomaly Easy to implement","breadcrumbs":"Virtual Memory » Replacement Policy » First-in-first-out (FIFO)","id":"5","title":"First-in-first-out (FIFO)"},"6":{"body":"Organize frames in a circular buffer. First loaded or subsequently referenced, use bit = 1. When replace, find a frame with use bit = 0, and reset use bit of frames that each scan encounters to 0. If all of the frames have a use bit of 1, then the pointer will make one complete cycle through the buffer, setting all the use bits to 0, and stop at its original position, replacing the page in that frame. An implementation of LRU using FIFO mechanism.","breadcrumbs":"Virtual Memory » Replacement Policy » Clock","id":"6","title":"Clock"},"7":{"body":"Algorithm Compare","breadcrumbs":"Virtual Memory » Replacement Policy » Example","id":"7","title":"Example"},"8":{"body":"","breadcrumbs":"Virtual Memory » Replacement Policy » Unfrequent Algorithms","id":"8","title":"Unfrequent Algorithms"},"9":{"body":"Not accessed recently, not modified (u = 0; m = 0) Accessed recently, not modified (u = 1; m = 0) Not accessed recently, modified (u = 0; m = 1) Accessed recently, modified (u = 1; m = 1) Beginning at the current position of the pointer, scan the frame buffer. During this scan, make no changes to the use bit. The first frame encountered with (u = 0; m = 0) is selected for replacement. If step 1 fails, scan again, looking for the frame with (u = 0; m = 1). The first such frame encountered is selected for replacement. During this scan, set the use bit to 0 on each frame that is bypassed. If step 2 fails, the pointer should have returned to its original position and all of the frames in the set will have a use bit of 0. Repeat step 1 and, if necessary, step 2. This time, a frame will be found for the replacement. In breif, the transitions of each state are shown in the table below, Use Bit Modify Bit Next State 0 0 swap 0 1 0 0 1 0 0 0 1 1 0 1","breadcrumbs":"Virtual Memory » Replacement Policy » Improved Clock","id":"9","title":"Improved Clock"}},"length":12,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":2,"docs":{"6":{"tf":1.7320508075688772},"9":{"tf":4.242640687119285}}},"1":{"df":3,"docs":{"10":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951},"9":{"tf":3.4641016151377544}}},"2":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"9":{"tf":2.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":5,"docs":{"11":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}}}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}},"o":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"9":{"tf":1.0}}}}},"l":{"a":{"d":{"df":0,"docs":{},"i":{"df":2,"docs":{"11":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"9":{"tf":1.0}}}}},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":2.23606797749979},"9":{"tf":2.23606797749979}}}},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"10":{"tf":2.449489742783178}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"9":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"u":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951},"9":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}}},"c":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}},"x":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}},"y":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}},"y":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":3,"docs":{"10":{"tf":1.4142135623730951},"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"f":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":3,"docs":{"11":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":3,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"6":{"tf":2.23606797749979},"9":{"tf":2.6457513110645907}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":5,"docs":{"10":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"a":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"9":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"u":{"df":2,"docs":{"4":{"tf":1.0},"6":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":3,"docs":{"10":{"tf":1.0},"6":{"tf":1.0},"9":{"tf":1.0}}}}},"df":1,"docs":{"9":{"tf":2.449489742783178}},"e":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":3,"docs":{"0":{"tf":1.0},"11":{"tf":1.0},"4":{"tf":1.0}}}}}}},"o":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"9":{"tf":2.23606797749979}}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"9":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":3,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}}}}},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"9":{"tf":2.0}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"10":{"tf":1.4142135623730951},"3":{"tf":1.0}},"e":{"df":0,"docs":{},"n":{"c":{"df":3,"docs":{"10":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"l":{"df":1,"docs":{"10":{"tf":1.0}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"a":{"c":{"df":6,"docs":{"1":{"tf":1.0},"10":{"tf":1.7320508075688772},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.4142135623730951},"9":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}},"s":{"c":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":2.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":3,"docs":{"10":{"tf":1.0},"3":{"tf":1.0},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"t":{"df":3,"docs":{"10":{"tf":1.0},"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":2.0}}}},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}}},"u":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":3,"docs":{"3":{"tf":1.0},"4":{"tf":1.7320508075688772},"9":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"u":{"df":1,"docs":{"9":{"tf":2.449489742783178}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"s":{"df":4,"docs":{"10":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":2.449489742783178},"9":{"tf":2.0}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"0":{"df":2,"docs":{"6":{"tf":1.7320508075688772},"9":{"tf":4.242640687119285}}},"1":{"df":3,"docs":{"10":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951},"9":{"tf":3.4641016151377544}}},"2":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"9":{"tf":2.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":5,"docs":{"11":{"tf":1.0},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}},"o":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"9":{"tf":1.0}}}}},"l":{"a":{"d":{"df":0,"docs":{},"i":{"df":2,"docs":{"11":{"tf":1.4142135623730951},"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"9":{"tf":1.0}}}}},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":2.23606797749979},"9":{"tf":2.23606797749979}}}},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"10":{"tf":2.449489742783178}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"9":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"u":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"5":{"tf":1.0},"6":{"tf":1.4142135623730951},"9":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}}},"c":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"6":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}},"x":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}},"y":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}},"y":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":3,"docs":{"10":{"tf":1.4142135623730951},"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"f":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":3,"docs":{"11":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":3,"docs":{"5":{"tf":2.0},"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"6":{"tf":2.23606797749979},"9":{"tf":2.6457513110645907}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}}}}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":5,"docs":{"10":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}}}},"n":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"a":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"9":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"u":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":3,"docs":{"10":{"tf":1.0},"6":{"tf":1.0},"9":{"tf":1.0}}}}},"df":1,"docs":{"9":{"tf":2.449489742783178}},"e":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":12,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"10":{"tf":1.0},"11":{"tf":1.4142135623730951},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}}},"o":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"9":{"tf":2.23606797749979}}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"9":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0}}}}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":3,"docs":{"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}}}}},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":11,"docs":{"1":{"tf":1.7320508075688772},"10":{"tf":1.0},"11":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"9":{"tf":2.0}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"10":{"tf":1.4142135623730951},"3":{"tf":1.0}},"e":{"df":0,"docs":{},"n":{"c":{"df":3,"docs":{"10":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"l":{"df":1,"docs":{"10":{"tf":1.0}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"a":{"c":{"df":11,"docs":{"1":{"tf":1.7320508075688772},"10":{"tf":2.0},"11":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.7320508075688772},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":2.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}},"s":{"c":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":2.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":3,"docs":{"10":{"tf":1.0},"3":{"tf":1.0},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"t":{"df":3,"docs":{"10":{"tf":1.0},"6":{"tf":1.0},"9":{"tf":1.4142135623730951}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":2.0}}}},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.0}}}}},"u":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}},"w":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":3,"docs":{"3":{"tf":1.0},"4":{"tf":1.7320508075688772},"9":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"u":{"df":1,"docs":{"9":{"tf":2.449489742783178}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}}}}},"s":{"df":4,"docs":{"10":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951},"6":{"tf":2.449489742783178},"9":{"tf":2.0}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":12,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"10":{"tf":1.0},"11":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.0}}}}}}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":2,"docs":{"6":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":1,"docs":{"4":{"tf":1.0}}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"s":{"df":2,"docs":{"10":{"tf":1.0},"4":{"tf":1.0}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});