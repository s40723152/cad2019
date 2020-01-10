var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '每週練習內容', 'text': '', 'tags': '', 'url': '每週練習內容.html'}, {'title': 'week2', 'text': '建立CMSIMDE網站 \n https://www.youtube.com/watch?v=E16xzFYAxjI&feature=youtu.be \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n re sh.exe sh_rename_for_solvespace.exe \n *p.s.\xa0 re 是重新命名的指令 \n git version 查驗 git 版本 ( 需要git 2.13 版本以上 ) \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n *p.s.\xa0 使用\xa0 git clone\xa0 --recurse-submodules 取得所有子模組資料，clone 前請先確認 \n 是否有重複檔名的資料，並耐心等候取得資料，以確保檔案完整性 \n 上述指令同: \n git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n cd solvespace \n git submodule init \n git submodule update \n 編輯 Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt 將 713 行和 714行註解掉，像底下這樣 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n *p.s.\xa0 漏掉此步驟，否則後續編譯會有錯誤 \n 到\xa0 Y:\\tmp\\solvespace\\extlib\\libpng 目錄底下新建名為 build目錄 \n cd solvespace\xa0 \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n mingw32-make \n 重新命名 Y:\\tmp\\solvespace\\extlib\\libpng\\build\\libpng.dll.a 改名為 libpng_static.a 並且複製到 Y:\\msys64\\mingw64\\lib \n 回到 Y:\\tmp\\solvespace 目錄下新建名為 build目錄 \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n mingw32-make \n 完成以上編譯後執行\xa0 Y: tmp\\solvespace\\build\\bin\\solvespace.exe\xa0 \xa0，若能成功執行就能確定完成 Solvespace 編譯 \n https://www.youtube.com/watch?v=79AgX0GJhOg&feature=youtu.be \n \n', 'tags': '', 'url': 'week3.html'}, {'title': 'week5', 'text': 'Solvespace 操作與繪圖示範 \n https://www.youtube.com/watch?v=U0QBwD6Xylo \n \n', 'tags': '', 'url': 'week5.html'}, {'title': 'week6', 'text': 'V-rep 網際 Python remote API 雙輪車控制模擬 \n https://www.youtube.com/watch?v=lJ5U_sepaAk \n \n \n \n', 'tags': '', 'url': 'week6.html'}, {'title': 'week8', 'text': '', 'tags': '', 'url': 'week8.html'}, {'title': 'week9', 'text': '期中考週報告影片 \n https://www.youtube.com/watch?v=alNjf8fBxk8&t=4s \n', 'tags': '', 'url': 'week9.html'}, {'title': 'week16', 'text': '請 2a 各學員根據 \xa0 Task2 \xa0 中 \xa0 Onshpae 越野車零組件 之尺寸與配置, 利用 Solvespace 完成簡化後的越野車零組件設計繪圖. \n 完成後請將所有零組件檔案, 放入個人倉儲 downloads 目錄中的 solvespace 子目錄, 然後將越野車組立件, 以 STL 格式轉出後, 轉入 V-rep 後, 將 ttt 檔案放入個人倉儲 downloads 目錄中的 solvespace 子目錄. \n 並將越野車組立件, 以 WRL 格式轉出後, 轉入 Webots 後, 將 wbt 檔案放入個人倉儲 downloads 目錄中的 solvespace 子目錄. \n 完成上述查驗任務後, 請將簡要過程拍成至多 3 分鐘的帶說明字幕導覽影片, 並將影片嵌入 W16 查驗頁面後, 將提交連結, 頁面連結與影片連結放入下列回應中, 附上操作心得, 並針對所碰到的問題進行說明討論. \n https://www.youtube.com/watch?v=kEE0Srb67Y0 \n \n', 'tags': '', 'url': 'week16.html'}, {'title': 'week17', 'text': "Building the dynamic shapes \n If we want our robot to be\xa0 dynamically enabled , i.e. react to collisions, fall, etc., then we need to create/configure the shapes appropriately: a shape can be: \n \xa0 \n 建立動態形狀 \n 如果我們希望我們的機器人能夠 動態啟 用 ，即對碰撞，跌落等做出反應，那麼我們需要適當地創建 / 配置形狀：形狀可以是： \n \xa0 \n \n   dynamic or static: a dynamic (or non-static) shape will fall and be influences by external forces/torques. A static (or non-dynamic) shape on the other hand, will stay in place, or follow the movement of its parent in the scene hierarchy. \n   respondable or non-respondable : a respondable shape will cause a collision reaction with other respondable shapes. They (and/or) their collider, will be influenced in their movement if they are dynamic. On the other hand, non-respondable shapes will not compute a collision response if they collide with other shapes. \n \n \xa0 \n 動態或靜態 ：動態（或非靜態）形狀會掉落並受到外力 / 扭矩的影響。另一方面，靜態（或非動態）形狀將保持不變，或跟隨其父級在場景層次中的移動。 \n 可響應或不可響應 ：可響應形狀會引起與其他可響應形狀的碰撞反應。如果它們是動態的，它們（和 / 或它們的對撞機）的運動將受到影響。另一方面，不負責任的形狀如果與其他形狀發生碰撞，則不會計算碰撞響應。 \n 以上說明了兩點 如 下 。負責任的形狀應盡可能簡單，以實現快速穩定的仿真。物理引擎將能夠以不同的速度和穩定性模擬以下 5 種類型的形狀： \n \xa0 \n Pure shapes : \xa0a pure shape will be stable and handled very efficiently by the physics engine. The draw-back is that pure shapes are limited in geometry: mostly cuboids, cylinders and spheres. If possible, use those for items that are in contact with other items for a longer time (e.g. the feet of a humanoid robot, the base of a serial manipulator, the fingers of a gripper, etc.). Pure shapes can be created with [Menu bar --> Add --> Primitive shape]. \n \xa0 \n 純形狀 ：純形狀將穩定並由物理引擎非常有效地處理。缺點是純形狀的幾何形狀受到限制：主要是長方體，圓柱體和球體。如果可能的話，將其用於與其他物品接觸時間較長的物品（例如，人形機器人的腳，串行機械手的底座，抓手的手指等）。可以使用 [ 菜單欄 -> 添加 -> 基本形狀 ] 創建純形狀。 \n \xa0 \n Pure compound shapes : \xa0a pure compound shape is a grouping of several pure shapes. It performs almost as well as pure shapes and shares similar properties. Pure compound shapes can be generated by grouping several pure shapes [Menu bar --> Edit --> Grouping/Merging --> Group selected shapes]. \n \xa0 \n 純複合形狀 ：純複合形狀是幾個純形狀的組合。它的性能幾乎與純形狀一樣，並具有相似的特性。可以通過對幾個純形狀進行分組來生成純複合形狀 [ 菜單欄 -> 編輯 -> 分組 / 合併 -> 分組所選形狀 ] 。 \n Convex shapes : a convex shape will be a little bit less stable and take a little bit more computation time when handled by the physics engine. It allows for a more general geometry (only requirement: it need to be convex) than pure shapes. If possible, use convex shapes for items that are sporadically in contact with other items (e.g. the various links of a robot). Convex shapes can be generated with [Menu bar --> Add --> Convex hull of selection] or with [Menu bar --> Edit --> Morph selection into convex shapes]. \n \xa0 \n 凸形狀 ：當由物理引擎處理時，凸形狀的穩定性會降低一些，而計算時間也會增加。與純形狀相比，它允許使用更通用的幾何形狀（僅要求：它必須是凸形的）。如果可能，將凸形用於偶爾與其他物品接觸的物品（例如，機器人的各個鏈接）。可以使用 [ 菜單欄 -> 添加 -> 選擇的凸包 ] 或 [ 菜單欄 -> 編輯 -> 將選擇變形為凸形 ] 生成凸形。 \n \xa0 \n Compound convex shapes, or convex decomposed shapes : a convex decomposed shape is a grouping of several convex shapes. It performs almost as well as convex shapes and shares similar properties. Convex decomposed shapes can be generated by grouping several convex shapes [Menu bar --> Edit --> Grouping/Merging --> Group selected shapes], with [Menu bar --> Add --> Convex decomposition of selection...], or with [Menu bar --> Edit --> Morph selection into its convex decomposition...]. \n \xa0 \n 複合凸形狀或凸分解形狀 ：凸分解形狀是幾個凸形狀的組合。它的性能幾乎與凸形相同，並具有相似的特性。可以通過將多個凸形分組 [ 菜單欄 -> 編輯 -> 分組 / 合併 -> 分組選定的形狀 ] ，並使用 [ 菜單欄 -> 添加 -> 選擇的凸分解 ...] 來生成凸分解形狀。  ] ，或使用 [ 菜單欄 -> 編輯 -> 將選擇變形到其凸分解 ...] 。 \n \xa0 \n Random shapes : a random shape is a shape that is not convex nor pure. It generally has poor performance (calculation speed and stability). Avoid using random shapes as much as possible. \n \xa0 \n 隨機形狀 ：隨機形狀是既非凸形也不是純淨的形狀。它通常具有較差的性能（計算速度和穩定性）。盡量避免使用隨機形狀。 \n \xa0 \n So the order of preference would be: pure shapes, pure compound shapes, convex shapes, compound convex shapes, and finally random shapes. Make sure to also read\xa0 this page . In case of the robot we want to build, we will make the base of the robot as a pure cylinder, and the other links as convex or convex decomposed shapes. \n \xa0 \n 因此，優先順序為：純形狀，純複合形狀，凸形，複合凸形，最後是隨機形狀。確保還閱讀此頁面。對於要構建的機器人，我們將其基座設為純圓柱體，將其他鏈接設為凸形或凸形分解形狀。 \n \xa0 \n We could use the dynamically enabled shapes also as the visible parts of the robot, but that would probably not look good enough. So instead, we will build for each visible shape we have created in\xa0 the first part of the tutorial \xa0a dynamically enabled counterpart, which we will keep hidden: the hidden part will represent the dynamic model and be exclusively used by the physics engine, while the visible part will be used for visualization, but also for\xa0 minimum distance calculations ,\xa0 proximity sensor detections , etc. \n \xa0 \n 我們也可以將動態啟用的形狀用作機器人的可見部分，但是看起來可能不夠好。因此，相反，我們將為在本教程第一部分中創建的每個可見形狀構建一個動態啟用的副本，該副本將保持隱藏狀態：隱藏部分將代表動態模型，並由物理引擎專用，而可見部分將用於可視化，還用於最小距離計算，接近傳感器檢測等。 \n \xa0 \n We select object\xa0 robot , copy-and-paste it into a new scene (in order to keep the original model intact) and start the\xa0 triangle edit mode . If object\xa0 robot \xa0was a compound shape, we would first have had to ungroup it ([Menu bar --> Edit --> Grouping/Merging --> Ungroup selected shapes]) then merge the individual shapes ([Menu bar --> Edit --> Grouping/Merging --> Merge selected shapes]) before being able to start the triangle edit mode. Now we select the few triangles that represent the power cable, and erase them. Then we select all triangles in that shape, and click Extract cylinder. We can now leave the edit mode and we have our base object represented as a pure cylinder: \n \xa0 \n 我們選擇對像機器人，將其複制並粘貼到新場景中（以保持原始模型不變），然後啟動 三角形編輯模式 。如果對像機器人是複合形狀，我們首先必須將其取消組合（ [ 菜單欄 -> 編輯 -> 分組 / 合併 -> 取消組合所選形狀 ] ），然後合併各個形狀（ [ 菜單欄 -> 在啟動三角形編輯模式之前，請編輯 -> 分組 / 合併 -> 合併選定的形狀 ] ）。現在，我們選擇代表電源線的幾個三角形，並將其刪除。然後，選擇該形狀中的所有三角形，然後單擊“提取圓柱體”。現在我們可以離開編輯模式，我們的基礎對象表示為純圓柱體： \n \xa0\xa0 \n [Pure cylinder generation procedure, in the triangle edit mode] \n [ 純圓柱體生成過程，在三角形編輯模式下 ] \n \xa0 \n We rename the new shape (with a double-click on its name in the\xa0 scene hierarchy ) as\xa0 robot_dyn , assign it to visibility layer 9, then copy it to the original scene. The rest of the links will be modelled as convex shapes, or compound convex shapes. We now select the first mobile link (i.e. object\xa0 robot_link1 ) and generate a convex shape from it with [Menu bar --> Add --> Convex hull of selection]. We rename it to\xa0 robot_link_dyn1 \xa0and assign it to visibility layer 9. When extracting the convex hull doesn't retain enough details of the original shape, then you could still manually extract several convex hulls from its composing elements, then group all the convex hulls with [Menu bar --> Edit --> Grouping/Merging --> Group selected shapes]. If that appears to be problematic or time consuming, then you can automatically extract a convex decomposed shape with [Menu bar --> Add --> Convex decomposition of selection...]: \n \xa0 \n 我們將新形狀重命名（在場景層次中雙擊其名稱）為 robot_dyn ，將其分配給可見性層 9 ，然後將其複製到原始場景。 其餘鏈接將建模為凸形或複合凸形。 現在，我們選擇第一個移動鏈接（即對象 robot_link1 ），並使用 [ 菜單欄 -> 添加 -> 選擇的凸包 ] 從中生成凸形。 我們將其重命名為 robot_link_dyn1 並將其分配給可見性層 9 。當提取凸包並沒有保留足夠的原始形狀細節時，您仍然可以手動從其組成元素中提取多個凸包，然後將所有凸包與  [ 菜單欄 -> 編輯 -> 分組 / 合併 -> 對選定形狀進行分組 ] 。 如果這似乎有問題或很耗時，則可以使用 [ 菜單欄 -> 添加 -> 選擇的凸分解 ...] 自動提取凸分解的形狀： \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n [Original shape, and convex shape pendant] \n [ 原始形狀和凸形吊墜 ] \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n [Original shape, and convex decomposed shape pendant] \n [ 原始形狀和凸形分解形狀吊墜 ] \n We now repeat the same procedure for all remaining robot links. Once that is done, we attach each visible shape to its corresponding invisible dynamic pendant. We do this by selecting first the visible shape, then via control-click selecting its dynamic pendant then [Menu bar --> Edit --> Make last selected object parent]. The same result can be achieved by dragging the visible shape onto its dynamic pendant in the\xa0 scene hierarchy : \n \n 現在，我們對所有剩餘的機器人鏈接重複相同的過程。 完成後，我們將每個可見的形狀附加到其相應的不可見的動態吊墜上。 為此，我們先選擇可見的形狀，然後按住 Control 鍵並單擊以選擇其動態吊墜，然後選擇 [ 菜單欄 -> 編輯 -> 將最後選擇的對象設為父對象 ] 。 通過將可見形狀拖動到場景層次中的動態吊墜上，可以實現相同的結果： \n \n \xa0 \n [Visible shapes attached to their dynamic pendants] \n [ 動態吊墜附有可見的形狀 ] \n We still need to take care of a few things: first, since we want the dynamic shapes only visible to the physics engine, but not to the other calculation modules, we uncheck all\xa0 object special properties \xa0for the dynamic shapes, in the\xa0 object common properties . \n \xa0 \n 我們仍然需要注意一些事項：首先，由於我們希望動態形狀僅對物理引擎可見，而對其他計算模塊不可見，因此在對象通用屬性中取消選中動態形狀的所有對象特殊屬性。 。 \n Then, we still have to configure the dynamic shapes as\xa0 dynamic \xa0and\xa0 respondable . We do this in the\xa0 shape dynamics properties . Select first the base dynamic shape(i.e.\xa0 robot_dyn ), then check the\xa0 Body is respondable \xa0item. Enable the first 4\xa0 Local respondable mask \xa0flags, and disable the last 4\xa0 Local respondable mask \xa0flags: it is important for consecutive respondable links not to collide with each other. For the first mobile dynamic link in our robot (i.e.\xa0 robot_link_dyn1 ), we also enable the\xa0 Body is respondable \xa0item, but this time we disable the first 4\xa0 Local respondable mask \xa0flags, and enable the last 4\xa0 Local respondable mask \xa0flags. We repeat the above procedure with all other dynamic links, while always alternating the\xa0 Local respondable mask \xa0flags: once the model will be defined, consecutive dynamic shapes of the robot will not generate any collision response when interacting with each other. Try to always end up with a construction where the dynamic base of the robot, and the dynamic last link of the robot have only the first 4\xa0 Local respondable mask \xa0flags enabled, so that we can attach the robot to a mobile platform, or attach a gripper to the last dynamic link of the robot without dynamic collision interferences. \n \xa0 \n 然後，我們仍然必須將動態形狀配置為 動態 且 可響應 的。我們在形狀動力學屬性中執行此操作。首先選擇基本動態形狀（即 robot_dyn ），然後檢查“ 主體是可響應的 ”項。啟用前四個“ 本地可響應掩碼 ”標誌，並禁用後四個“ 本地可響應掩碼 ”標誌：對於連續的可響應鏈接不要彼此衝突非常重要。對於我們機器人中的第一個移動動態鏈接（即 robot_link_dyn1 ），我們還啟用了“ 身體可響應 ”項，但是這次我們禁用了前 4 個“ 本地可響應掩碼 ”標誌，並啟用了後 4 個“ 本地可響應掩碼 ”標誌。我們對所有其他動態鏈接重複上述過程，同時始終交替使用“ 本地可響應掩碼 ”標誌：一旦定義了模型，則連續的機器人動態形狀在彼此交互時不會產生任何碰撞響應。嘗試始終以這樣一種構造結束：機器人的動態基礎和機器人的動態最後一個鏈接僅啟用了前 4 個“本地可響應掩碼”標誌，以便我們可以將機器人附加到移動平台，或附加一個抓取器連接到機器人的最後一個動態鏈接，而沒有動態碰撞干擾。 \n \xa0 \n Finally, we still need to tag our dynamic shapes as\xa0 Body is dynamic . We do this also in the\xa0 shape dynamics properties . We can then enter the mass and inertia tensor properties manually, or have those values automatically computed (recommended) by clicking\xa0 Compute mass & inertia properties for selected convex shapes . Remember also\xa0 this \xa0and\xa0 that \xa0dynamic design considerations. This dynamic base of the robot is a special case: most of the time we want the base of the robot (i.e.\xa0 robot_dyn ) to be non-dynamic (i.e. static), otherwise, if used alone, the robot might fall during movement. But as soon as we attach the base of the robot to a mobile platform, we want the base to become dynamic (i.e. non-static). We do this by enabling the\xa0 Set to dynamic if gets parent \xa0item, then disabling the \xa0Body is dynamic item . Now run the simulation: all dynamic shapes, except for the base of the robot, should fall. That attached visual shapes will follow their dynamic pendants. \n \xa0 \n 最後，我們仍然需要將動態形狀標記為“ 身體是動態的 ”。我們也在 形狀動力學屬性 中執行此操作。然後，我們可以手動輸入質量和慣性張量屬性，或者通過單擊“ 計算選定凸形的質量和慣性屬性 ”來自動計算（推薦）那些值。還請記住這一點以及該動態設計注意事項。機器人的這種動態基座是一種特殊情況：大多數時候，我們希望機器人的基座（即 robot_dyn ）是非動態的（即靜態），否則，如果單獨使用，則機器人可能會在運動過程中掉落。但是，一旦我們將機器人的底座連接到移動平台上，我們就希望底座變得動態（即非靜態）。我們通過啟用“ 如果獲取父項時設置為動態 ”項，然後禁用“ 主體為動態 ”項來做到這一點。現在運行仿真：除了機器人的基座之外，所有動態形狀都應下降。附加的視覺形狀將跟隨其動態吊墜。", 'tags': '', 'url': 'week17.html'}, {'title': 'week17-1 越野車零件設計繪圖操作流程', 'text': '\n 觀察車子外型 \n \n 模擬車子試跑 \n \n 模擬車子經過障礙物 \n \n 操作過程影片 \n https://www.youtube.com/watch?v=qGcRXbB0JO8 \n 心得: 由於這禮拜的分配時間的問題，翻譯時間佔用太多時間，導致任務二來不及放入個人網站中，下次我會好好分配時間，完成任務。', 'tags': '', 'url': 'week17-1 越野車零件設計繪圖操作流程.html'}]};