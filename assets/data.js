var data = [
    {
        id: 1,
        title: "..は, ...が",
        body: "",
        note: "So sánh は và が",
        description: [
            `Trợ từ は được sử dụng trong các trường hợp sau: <br/>
        1. Dùng để biểu thị chủ đề trong câu  <br/>
        2. Dùng để đưa một thành phần lên làm chủ đề câu. <br/>
        2. Dùng trong câu có vị ngữ là từ nghi vấn. <br/>
        3. Dùng trong câu nói về một sự việc đang diễn ra trước mắt người nói, hoặc một quy luật, tập quán, phép tắc hay một tính chất khó thay đổi nào đó (cái đã xác định). <br/>
        4. Dùng trong câu biểu thị ý so sánh, phân biệt, lựa chọn. <br/>
        5. Dùng trong câu vừa có chủ đề vừa có chủ ngữ (trợ từ は đánh dấu chủ đề). <br/>
        6. Dùng trong câu biểu thị lý do, nguyên nhân. <br/>
        7. Dùng để biểu thị sự nhấn mạnh về mức độ hoặc giới hạn nào đó (với số từ, trợ từ は thường đi kèm để biểu thị mức độ “như vậy hoặc hơn thế nữa" (đặc biệt là trong cách nói về giá cả). <br/>
        8. Dùng để nhấn mạnh một hành động lặp lại nhiều lần. <br/>
        9. Ngoài ra, đối với ngạn ngữ, trong một số trường hợp, trợ từ は có thể đi cùng với động từ.  <br/>
        `,
            `Trợ từ が được sử dụng trong các trường hợp sau:<br/>
        1. Dùng để biểu thị chủ thể của hành động, động tác, tính chất, trạng thái (thường là câu trần thuật, thuật lại một sự việc, sự thực nào đó hoặc miêu tả những sự vật đang nhìn thấy trước mắt, người nói không đưa phán đoán của mình vào mà chỉ thuật lại sự việc, hiện tượng y như nó vốn có).<br>
        2. Chỉ chủ ngữ trong câu tồn tại.<br>
        3. Biểu thị “đối thể” trong câu chỉ trạng thái (tức là chỉ đối tượng của trạng thái tình cảm, cảm giác, năng lực, hy vọng…).<br>
        4. Dùng trong câu có chủ ngữ là từ nghi vấn. <br>
        5. Dùng trong câu tường thuật lại một sự việc, vấn đề mới được phát hiện.<br>
        6. Dùng trong câu vừa có chủ đề vừa có chủ ngữ (trợ từ  が đánh dấu chủ ngữ).<br>
        7. Biểu thị đối tượng được lựa chọn trong câu so sánh.<br>
        8. Biểu thị chủ ngữ trong mệnh đề phụ.<br>
        9. Được dùng như một liên từ để nối hai mệnh đề có quan hệ đối lập hoặc đẳng lập về ngữ nghĩa.<br>10. Dùng trong câu vào đề. <br>11. Ngoài ra, trợ từ が còn được sử dụng trong một số hình thức quán dụng hay một số ngạn ngữ. <br/> `,
            `Tóm lại, khác với trợ từ は, trợ từ が là trợ từ chuyên dùng để biểu thị các kiểu quan hệ ngữ pháp, đơn thuần chỉ biểu thị mối quan hệ giữa chủ ngữ và vị ngữ, cụ thể là trợ từ が có chức năng chỉ ra “chủ thể”–đối tượng thực sự gây ra hoặc có các hành động, tính chất, trạng thái được nói đến ở động từ vị ngữ. 
      <br>Vậy nên, những câu văn có trợ từ が sẽ trở thành câu “phi chủ đề”, chỉ đơn thuần miêu tả sự việc hoặc thuyết minh tình huống, quá trình...... chứ không phải là câu biểu thị phán đoán như câu có trợ từ は. 
      <br>Bên cạnh đó, trợ từ は có phạm vi ảnh hưởng rộng, đến tận động từ đứng cuối câu (ví dụ 1), trong khi trợ từ が chỉ có ảnh hưởng tới động từ gần nó nhất (ví dụ 2).`,
        ],
        example: [
            [
                "彼女は医者です。",
                "木村さんは家族にこの手紙を書いた。この手紙は木村さんが家族に書いた。",
                "あなたの鍵はどれですか。",
                "水は摂氏100度で沸騰します。",
                "父は医者で、 母は歌手だ。",
                "象は耳が大きい。",
                "会社を休んだのは風邪を引いたからです。",
                "一昨日まではこのテレビは壊れていなかった。",
            ], ["海が青い。",
                "椅子の上に傘があります。",
                "私は辛いものが好きです。",
                "どれがあなたの鍵ですか。",
                "あ、鞄がない。",
                "ベトナムは食べ物が安い。",
                "富士山の方が高いです。",
                "雨が降りそうなので試合は中止します。",
            ], [" 鈴木君は大学に合格していたら、電話します。",
                "鈴木君が大学に合格していたら、電話します。"]
        ],
        exampleMean: [
            [
                "Cô ấy là bác sĩ.",
                "Chị Kimura viết bức thư này cho gia đình. Bức thư này (là) Chị Kimura viết cho gia đình.",
                "Chìa khóa của bạn là cái nào?",
                "Nước sôi ở 100 độ C.",
                "Bố tôi là bác sĩ, còn mẹ tôi là ca sĩ.",
                "Con voi thì tai to.",
                "Nghỉ làm là do bị cảm.",
                "Cho đến ngày hôm kia thì chiếc tivi này vẫn chưa bị hỏng.",
            ],
            ["Biển có màu xanh.",
                "Trên ghế có ô.",
                "Tôi thích đồ cay.",
                "Cái nào là chìa khóa của bạn?  ",
                "Ơ, mất túi rồi.",
                "Ở Việt Nam, đồ ăn rẻ.",
                "Núi Phú Sĩ cao hơn.",
                "Vì trời sắp mưa, nên trận đấu sẽ được dời lại.",
            ], ["Nếu Suzuki đỗ đại học, thì cậu ta sẽ gọi điện.", "Nếu Suzuki đỗ đại học, thì (tôi) sẽ gọi điện."]
        ],

        lesson: "N5",
    },
    {
        id: 2,
        title: "います",
        body: "",
        note: "Có... (sở hữu)",
        description: [
            `<strong>N</strong> が います <br/>
            Dùng để biểu thị sự sở hữu đối với người và động vật. Không dùng cho đồ vật.<br/>
       `],
        example: [
            [
                "私は猫が二匹います。",
                "彼は息子がいません。",

            ]
        ],
        exampleMean: [
            [
                "Tôi có hai con mèo.",
                "Ông ấy không có con trai..",

            ],
        ],

        lesson: "N5",
    },
    {
        id: 3,
        title: "..は, ...が",
        body: "",
        note: "So sánh は và が",
        description: [
            `Trợ từ は được sử dụng trong các trường hợp sau: <br/>
        1. Dùng để biểu thị chủ đề trong câu  <br/>
        2. Dùng để đưa một thành phần lên làm chủ đề câu. <br/>
        2. Dùng trong câu có vị ngữ là từ nghi vấn. <br/>
        3. Dùng trong câu nói về một sự việc đang diễn ra trước mắt người nói, hoặc một quy luật, tập quán, phép tắc hay một tính chất khó thay đổi nào đó (cái đã xác định). <br/>
        4. Dùng trong câu biểu thị ý so sánh, phân biệt, lựa chọn. <br/>
        5. Dùng trong câu vừa có chủ đề vừa có chủ ngữ (trợ từ は đánh dấu chủ đề). <br/>
        6. Dùng trong câu biểu thị lý do, nguyên nhân. <br/>
        7. Dùng để biểu thị sự nhấn mạnh về mức độ hoặc giới hạn nào đó (với số từ, trợ từ は thường đi kèm để biểu thị mức độ “như vậy hoặc hơn thế nữa" (đặc biệt là trong cách nói về giá cả). <br/>
        8. Dùng để nhấn mạnh một hành động lặp lại nhiều lần. <br/>
        9. Ngoài ra, đối với ngạn ngữ, trong một số trường hợp, trợ từ は có thể đi cùng với động từ.  <br/>
        `,
            `Trợ từ が được sử dụng trong các trường hợp sau:<br/>
        1. Dùng để biểu thị chủ thể của hành động, động tác, tính chất, trạng thái (thường là câu trần thuật, thuật lại một sự việc, sự thực nào đó hoặc miêu tả những sự vật đang nhìn thấy trước mắt, người nói không đưa phán đoán của mình vào mà chỉ thuật lại sự việc, hiện tượng y như nó vốn có).<br>
        2. Chỉ chủ ngữ trong câu tồn tại.<br>
        3. Biểu thị “đối thể” trong câu chỉ trạng thái (tức là chỉ đối tượng của trạng thái tình cảm, cảm giác, năng lực, hy vọng…).<br>
        4. Dùng trong câu có chủ ngữ là từ nghi vấn. <br>
        5. Dùng trong câu tường thuật lại một sự việc, vấn đề mới được phát hiện.<br>
        6. Dùng trong câu vừa có chủ đề vừa có chủ ngữ (trợ từ  が đánh dấu chủ ngữ).<br>
        7. Biểu thị đối tượng được lựa chọn trong câu so sánh.<br>
        8. Biểu thị chủ ngữ trong mệnh đề phụ.<br>
        9. Được dùng như một liên từ để nối hai mệnh đề có quan hệ đối lập hoặc đẳng lập về ngữ nghĩa.<br>10. Dùng trong câu vào đề. <br>11. Ngoài ra, trợ từ が còn được sử dụng trong một số hình thức quán dụng hay một số ngạn ngữ. <br/> `,
            `Tóm lại, khác với trợ từ は, trợ từ が là trợ từ chuyên dùng để biểu thị các kiểu quan hệ ngữ pháp, đơn thuần chỉ biểu thị mối quan hệ giữa chủ ngữ và vị ngữ, cụ thể là trợ từ が có chức năng chỉ ra “chủ thể”–đối tượng thực sự gây ra hoặc có các hành động, tính chất, trạng thái được nói đến ở động từ vị ngữ. 
      <br>Vậy nên, những câu văn có trợ từ が sẽ trở thành câu “phi chủ đề”, chỉ đơn thuần miêu tả sự việc hoặc thuyết minh tình huống, quá trình...... chứ không phải là câu biểu thị phán đoán như câu có trợ từ は. 
      <br>Bên cạnh đó, trợ từ は có phạm vi ảnh hưởng rộng, đến tận động từ đứng cuối câu (ví dụ 1), trong khi trợ từ が chỉ có ảnh hưởng tới động từ gần nó nhất (ví dụ 2).`,
        ],
        example: [
            [
                "彼女は医者です。",
                "木村さんは家族にこの手紙を書いた。この手紙は木村さんが家族に書いた。",
                "あなたの鍵はどれですか。",
                "水は摂氏100度で沸騰します。",
                "父は医者で、 母は歌手だ。",
                "象は耳が大きい。",
                "会社を休んだのは風邪を引いたからです。",
                "一昨日まではこのテレビは壊れていなかった。",
            ], ["海が青い。",
                "椅子の上に傘があります。",
                "私は辛いものが好きです。",
                "どれがあなたの鍵ですか。",
                "あ、鞄がない。",
                "ベトナムは食べ物が安い。",
                "富士山の方が高いです。",
                "雨が降りそうなので試合は中止します。",
            ], [" 鈴木君は大学に合格していたら、電話します。",
                "鈴木君が大学に合格していたら、電話します。"]
        ],
        exampleMean: [
            [
                "Cô ấy là bác sĩ.",
                "Chị Kimura viết bức thư này cho gia đình. Bức thư này (là) Chị Kimura viết cho gia đình.",
                "Chìa khóa của bạn là cái nào?",
                "Nước sôi ở 100 độ C.",
                "Bố tôi là bác sĩ, còn mẹ tôi là ca sĩ.",
                "Con voi thì tai to.",
                "Nghỉ làm là do bị cảm.",
                "Cho đến ngày hôm kia thì chiếc tivi này vẫn chưa bị hỏng.",
            ],
            ["Biển có màu xanh.",
                "Trên ghế có ô.",
                "Tôi thích đồ cay.",
                "Cái nào là chìa khóa của bạn?  ",
                "Ơ, mất túi rồi.",
                "Ở Việt Nam, đồ ăn rẻ.",
                "Núi Phú Sĩ cao hơn.",
                "Vì trời sắp mưa, nên trận đấu sẽ được dời lại.",
            ], ["Nếu Suzuki đỗ đại học, thì cậu ta sẽ gọi điện.", "Nếu Suzuki đỗ đại học, thì (tôi) sẽ gọi điện."]
        ],

        lesson: "N5",
    },
    {
        id: 4,
        title: "..は, ...が",
        body: "",
        note: "So sánh は và が",
        description: [
            `Trợ từ は được sử dụng trong các trường hợp sau: <br/>
        1. Dùng để biểu thị chủ đề trong câu  <br/>
        2. Dùng để đưa một thành phần lên làm chủ đề câu. <br/>
        2. Dùng trong câu có vị ngữ là từ nghi vấn. <br/>
        3. Dùng trong câu nói về một sự việc đang diễn ra trước mắt người nói, hoặc một quy luật, tập quán, phép tắc hay một tính chất khó thay đổi nào đó (cái đã xác định). <br/>
        4. Dùng trong câu biểu thị ý so sánh, phân biệt, lựa chọn. <br/>
        5. Dùng trong câu vừa có chủ đề vừa có chủ ngữ (trợ từ は đánh dấu chủ đề). <br/>
        6. Dùng trong câu biểu thị lý do, nguyên nhân. <br/>
        7. Dùng để biểu thị sự nhấn mạnh về mức độ hoặc giới hạn nào đó (với số từ, trợ từ は thường đi kèm để biểu thị mức độ “như vậy hoặc hơn thế nữa" (đặc biệt là trong cách nói về giá cả). <br/>
        8. Dùng để nhấn mạnh một hành động lặp lại nhiều lần. <br/>
        9. Ngoài ra, đối với ngạn ngữ, trong một số trường hợp, trợ từ は có thể đi cùng với động từ.  <br/>
        `,
            `Trợ từ が được sử dụng trong các trường hợp sau:<br/>
        1. Dùng để biểu thị chủ thể của hành động, động tác, tính chất, trạng thái (thường là câu trần thuật, thuật lại một sự việc, sự thực nào đó hoặc miêu tả những sự vật đang nhìn thấy trước mắt, người nói không đưa phán đoán của mình vào mà chỉ thuật lại sự việc, hiện tượng y như nó vốn có).<br>
        2. Chỉ chủ ngữ trong câu tồn tại.<br>
        3. Biểu thị “đối thể” trong câu chỉ trạng thái (tức là chỉ đối tượng của trạng thái tình cảm, cảm giác, năng lực, hy vọng…).<br>
        4. Dùng trong câu có chủ ngữ là từ nghi vấn. <br>
        5. Dùng trong câu tường thuật lại một sự việc, vấn đề mới được phát hiện.<br>
        6. Dùng trong câu vừa có chủ đề vừa có chủ ngữ (trợ từ  が đánh dấu chủ ngữ).<br>
        7. Biểu thị đối tượng được lựa chọn trong câu so sánh.<br>
        8. Biểu thị chủ ngữ trong mệnh đề phụ.<br>
        9. Được dùng như một liên từ để nối hai mệnh đề có quan hệ đối lập hoặc đẳng lập về ngữ nghĩa.<br>10. Dùng trong câu vào đề. <br>11. Ngoài ra, trợ từ が còn được sử dụng trong một số hình thức quán dụng hay một số ngạn ngữ. <br/> `,
            `Tóm lại, khác với trợ từ は, trợ từ が là trợ từ chuyên dùng để biểu thị các kiểu quan hệ ngữ pháp, đơn thuần chỉ biểu thị mối quan hệ giữa chủ ngữ và vị ngữ, cụ thể là trợ từ が có chức năng chỉ ra “chủ thể”–đối tượng thực sự gây ra hoặc có các hành động, tính chất, trạng thái được nói đến ở động từ vị ngữ. 
      <br>Vậy nên, những câu văn có trợ từ が sẽ trở thành câu “phi chủ đề”, chỉ đơn thuần miêu tả sự việc hoặc thuyết minh tình huống, quá trình...... chứ không phải là câu biểu thị phán đoán như câu có trợ từ は. 
      <br>Bên cạnh đó, trợ từ は có phạm vi ảnh hưởng rộng, đến tận động từ đứng cuối câu (ví dụ 1), trong khi trợ từ が chỉ có ảnh hưởng tới động từ gần nó nhất (ví dụ 2).`,
        ],
        example: [
            [
                "彼女は医者です。",
                "木村さんは家族にこの手紙を書いた。この手紙は木村さんが家族に書いた。",
                "あなたの鍵はどれですか。",
                "水は摂氏100度で沸騰します。",
                "父は医者で、 母は歌手だ。",
                "象は耳が大きい。",
                "会社を休んだのは風邪を引いたからです。",
                "一昨日まではこのテレビは壊れていなかった。",
            ], ["海が青い。",
                "椅子の上に傘があります。",
                "私は辛いものが好きです。",
                "どれがあなたの鍵ですか。",
                "あ、鞄がない。",
                "ベトナムは食べ物が安い。",
                "富士山の方が高いです。",
                "雨が降りそうなので試合は中止します。",
            ], [" 鈴木君は大学に合格していたら、電話します。",
                "鈴木君が大学に合格していたら、電話します。"]
        ],
        exampleMean: [
            [
                "Cô ấy là bác sĩ.",
                "Chị Kimura viết bức thư này cho gia đình. Bức thư này (là) Chị Kimura viết cho gia đình.",
                "Chìa khóa của bạn là cái nào?",
                "Nước sôi ở 100 độ C.",
                "Bố tôi là bác sĩ, còn mẹ tôi là ca sĩ.",
                "Con voi thì tai to.",
                "Nghỉ làm là do bị cảm.",
                "Cho đến ngày hôm kia thì chiếc tivi này vẫn chưa bị hỏng.",
            ],
            ["Biển có màu xanh.",
                "Trên ghế có ô.",
                "Tôi thích đồ cay.",
                "Cái nào là chìa khóa của bạn?  ",
                "Ơ, mất túi rồi.",
                "Ở Việt Nam, đồ ăn rẻ.",
                "Núi Phú Sĩ cao hơn.",
                "Vì trời sắp mưa, nên trận đấu sẽ được dời lại.",
            ], ["Nếu Suzuki đỗ đại học, thì cậu ta sẽ gọi điện.", "Nếu Suzuki đỗ đại học, thì (tôi) sẽ gọi điện."]
        ],

        lesson: "N5",
    },
    {
        id: 5,
        title: "..は, ...が",
        body: "",
        note: "So sánh は và が",
        description: [
            `Trợ từ は được sử dụng trong các trường hợp sau: <br/>
        1. Dùng để biểu thị chủ đề trong câu  <br/>
        2. Dùng để đưa một thành phần lên làm chủ đề câu. <br/>
        2. Dùng trong câu có vị ngữ là từ nghi vấn. <br/>
        3. Dùng trong câu nói về một sự việc đang diễn ra trước mắt người nói, hoặc một quy luật, tập quán, phép tắc hay một tính chất khó thay đổi nào đó (cái đã xác định). <br/>
        4. Dùng trong câu biểu thị ý so sánh, phân biệt, lựa chọn. <br/>
        5. Dùng trong câu vừa có chủ đề vừa có chủ ngữ (trợ từ は đánh dấu chủ đề). <br/>
        6. Dùng trong câu biểu thị lý do, nguyên nhân. <br/>
        7. Dùng để biểu thị sự nhấn mạnh về mức độ hoặc giới hạn nào đó (với số từ, trợ từ は thường đi kèm để biểu thị mức độ “như vậy hoặc hơn thế nữa" (đặc biệt là trong cách nói về giá cả). <br/>
        8. Dùng để nhấn mạnh một hành động lặp lại nhiều lần. <br/>
        9. Ngoài ra, đối với ngạn ngữ, trong một số trường hợp, trợ từ は có thể đi cùng với động từ.  <br/>
        `,
            `Trợ từ が được sử dụng trong các trường hợp sau:<br/>
        1. Dùng để biểu thị chủ thể của hành động, động tác, tính chất, trạng thái (thường là câu trần thuật, thuật lại một sự việc, sự thực nào đó hoặc miêu tả những sự vật đang nhìn thấy trước mắt, người nói không đưa phán đoán của mình vào mà chỉ thuật lại sự việc, hiện tượng y như nó vốn có).<br>
        2. Chỉ chủ ngữ trong câu tồn tại.<br>
        3. Biểu thị “đối thể” trong câu chỉ trạng thái (tức là chỉ đối tượng của trạng thái tình cảm, cảm giác, năng lực, hy vọng…).<br>
        4. Dùng trong câu có chủ ngữ là từ nghi vấn. <br>
        5. Dùng trong câu tường thuật lại một sự việc, vấn đề mới được phát hiện.<br>
        6. Dùng trong câu vừa có chủ đề vừa có chủ ngữ (trợ từ  が đánh dấu chủ ngữ).<br>
        7. Biểu thị đối tượng được lựa chọn trong câu so sánh.<br>
        8. Biểu thị chủ ngữ trong mệnh đề phụ.<br>
        9. Được dùng như một liên từ để nối hai mệnh đề có quan hệ đối lập hoặc đẳng lập về ngữ nghĩa.<br>10. Dùng trong câu vào đề. <br>11. Ngoài ra, trợ từ が còn được sử dụng trong một số hình thức quán dụng hay một số ngạn ngữ. <br/> `,
            `Tóm lại, khác với trợ từ は, trợ từ が là trợ từ chuyên dùng để biểu thị các kiểu quan hệ ngữ pháp, đơn thuần chỉ biểu thị mối quan hệ giữa chủ ngữ và vị ngữ, cụ thể là trợ từ が có chức năng chỉ ra “chủ thể”–đối tượng thực sự gây ra hoặc có các hành động, tính chất, trạng thái được nói đến ở động từ vị ngữ. 
      <br>Vậy nên, những câu văn có trợ từ が sẽ trở thành câu “phi chủ đề”, chỉ đơn thuần miêu tả sự việc hoặc thuyết minh tình huống, quá trình...... chứ không phải là câu biểu thị phán đoán như câu có trợ từ は. 
      <br>Bên cạnh đó, trợ từ は có phạm vi ảnh hưởng rộng, đến tận động từ đứng cuối câu (ví dụ 1), trong khi trợ từ が chỉ có ảnh hưởng tới động từ gần nó nhất (ví dụ 2).`,
        ],
        example: [
            [
                "彼女は医者です。",
                "木村さんは家族にこの手紙を書いた。この手紙は木村さんが家族に書いた。",
                "あなたの鍵はどれですか。",
                "水は摂氏100度で沸騰します。",
                "父は医者で、 母は歌手だ。",
                "象は耳が大きい。",
                "会社を休んだのは風邪を引いたからです。",
                "一昨日まではこのテレビは壊れていなかった。",
            ], ["海が青い。",
                "椅子の上に傘があります。",
                "私は辛いものが好きです。",
                "どれがあなたの鍵ですか。",
                "あ、鞄がない。",
                "ベトナムは食べ物が安い。",
                "富士山の方が高いです。",
                "雨が降りそうなので試合は中止します。",
            ], [" 鈴木君は大学に合格していたら、電話します。",
                "鈴木君が大学に合格していたら、電話します。"]
        ],
        exampleMean: [
            [
                "Cô ấy là bác sĩ.",
                "Chị Kimura viết bức thư này cho gia đình. Bức thư này (là) Chị Kimura viết cho gia đình.",
                "Chìa khóa của bạn là cái nào?",
                "Nước sôi ở 100 độ C.",
                "Bố tôi là bác sĩ, còn mẹ tôi là ca sĩ.",
                "Con voi thì tai to.",
                "Nghỉ làm là do bị cảm.",
                "Cho đến ngày hôm kia thì chiếc tivi này vẫn chưa bị hỏng.",
            ],
            ["Biển có màu xanh.",
                "Trên ghế có ô.",
                "Tôi thích đồ cay.",
                "Cái nào là chìa khóa của bạn?  ",
                "Ơ, mất túi rồi.",
                "Ở Việt Nam, đồ ăn rẻ.",
                "Núi Phú Sĩ cao hơn.",
                "Vì trời sắp mưa, nên trận đấu sẽ được dời lại.",
            ], ["Nếu Suzuki đỗ đại học, thì cậu ta sẽ gọi điện.", "Nếu Suzuki đỗ đại học, thì (tôi) sẽ gọi điện."]
        ],

        lesson: "N5",
    },
];


const getCurrentTimeDate = () => {
    let currentTimeDate = new Date();

    // var weekday = new Array(7);
    // weekday[0] = "Sunday";
    // weekday[1] = "Monday";
    // weekday[2] = "Tuesday";
    // weekday[3] = "Wednesday";
    // weekday[4] = "Thursday";
    // weekday[5] = "Friday";
    // weekday[6] = "Saturday";

    // var month = new Array();
    // month[0] = "January";
    // month[1] = "February";
    // month[2] = "March";
    // month[3] = "April";
    // month[4] = "May";
    // month[5] = "June";
    // month[6] = "July";
    // month[7] = "August";
    // month[8] = "September";
    // month[9] = "October";
    // month[10] = "November";
    // month[11] = "December";

    var weekday = new Array(7);
    weekday[0] = "日";
    weekday[1] = "月";
    weekday[2] = "火";
    weekday[3] = "水";
    weekday[4] = "木";
    weekday[5] = "金";
    weekday[6] = "土";

    var month = new Array();
    month[0] = "一";
    month[1] = "二";
    month[2] = "三";
    month[3] = "四";
    month[4] = "五";
    month[5] = "六";
    month[6] = "七";
    month[7] = "八";
    month[8] = "九";
    month[9] = "十";
    month[10] = "十一";
    month[11] = "十二";


    var hours = currentTimeDate.getHours();

    var minutes = currentTimeDate.getMinutes();
    var seconds = currentTimeDate.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    //  var AMPM = hours >= 12 ? 'PM' : 'AM';

    // if(hours === 12){
    //     hours=12;

    // }else{

    //     hours = hours%12;

    // }



    var currentTime = `${hours}:${minutes}:${seconds}`;
    var currentDay = weekday[currentTimeDate.getDay()];

    var currentDate = currentTimeDate.getDate();


    // if(currentDate === 1){
    //   currentDate = currentDate + "st";

    // }
    // else if(currentDate === 2){
    //   currentDate = currentDate + "nd";

    // }
    // else if(currentDate === 3){
    //   currentDate = currentDate + "rd";

    // }else{
    //   currentDate = currentDate + "th";
    // }
    // var currentMonth = month[currentTimeDate.getMonth()];
    var currentMonth = currentTimeDate.getMonth() + 1;

    var CurrentYear = currentTimeDate.getFullYear();

    var fullDate = `${CurrentYear}年   ${currentMonth}月  ${currentDate}日 `;


    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("day").innerHTML = currentDay + "曜日";
    document.getElementById("date").innerHTML = fullDate;

    setTimeout(getCurrentTimeDate, 500);

}