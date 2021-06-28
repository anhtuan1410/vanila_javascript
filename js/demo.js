(function(){

    function fetchApi()
    {
        let src = "http://45.122.223.62/Help";
        let s = "http://localhost:51110//api/Test/1";
        let s2 = 'http://45.122.223.62/api/Test/1';

        let options = {
            method: 'GET',
            mode: 'cors',
          };

        //   fetch('http://localhost:51110/api/Test',{
        //     headers: {
                
        //     },           
        // })
        // .then( (res) => {            
        //     return res.json();
        // })
        // .then( (p) => {  
        //     console.log("Api test => ", p);
        // })
        // .catch((ex) => {
        //     alert("Lỗi api: "+ex);
        // });


        // fetch('https://randomuser.me/api/?results=10',{
        //     method:'GET',           
        // })
        // .then( (res) => {            
        //     return res.json();
        // })
        // .then( (p) => {  
        //     console.log("Random Users", p);
        // })
        // .catch((ex) => {
        //     alert("Lỗi api: "+ex);
        // });
          //    http://45.122.223.62
          //    http://localhost:51110/
        fetch('http://192.168.2.167/api/room/list',{
            headers: {
                "token": "79e73989-fb22-4096-9138-b6f3becbd48a",
                "Security":"d5e74f9c-8a5e-49fc-9286-e97197fdbb59"
            },           
        })
        .then( (res) => {            
            return res.json();
        })
        .then( (p) => {  
            console.log("Api Room => ", p);
        })
        .catch((ex) => {
            alert("Lỗi api: "+ex);
        });

        // $.ajax({
        //     url: 'http://localhost:51110/api/room/list',
        //     headers: {
        //         "token": "79e73989-fb22-4096-9138-b6f3becbd48a",
        //         "Security":"d5e74f9c-8a5e-49fc-9286-e97197fdbb59"
        //     },
        //     error: function(err) {
        //        console.log("Lỗi: "+err)
        //     },
        //     dataType: 'json',
        //     success: function(data) {
        //        console.log("Thành công: ");
        //        console.log(data);
        //     },
        //     type: 'GET'
        //  });

        // $.ajax({
        //     url: 'https://randomuser.me/api/?results=10',
        //     dataType: 'json',
        //     success: function(data) {
        //       console.log(data);
        //     }
        //   });

       
    }

    fetchApi();

})();








// USE [Dps_KeToan]
// GO
// /****** Object:  StoredProcedure [dbo].[sp_So_Doi_Chieu_Cong_No]    Script Date: 08/01/18 10:59:12 AM ******/
// SET ANSI_NULLS ON
// GO
// SET QUOTED_IDENTIFIER ON
// GO
// -- =============================================
// -- Author:		Anh Tuan 😍
// -- Create date: 27/07/2018
// -- Description:	Sổ đối chiếu công nợ
// -- =============================================
// ALTER PROCEDURE [dbo].[sp_So_Doi_Chieu_Cong_No]  
// 	@ngayHachToanFrom VARCHAR(20),
// 	@ngayHachToanTo VARCHAR(20),
// 	@taikhoan varchar(20),
// 	@ma_NCC nvarchar(60),
// 	@chiTietMatHang bit
// AS
// BEGIN
// 	SET NOCOUNT ON	

// 		--Một số khai báo tên biến
// 		DECLARE @tenTbl nvarchar(max), @str nvarchar(max), @parent int, @strSTT VARCHAR(10), @strResult nvarchar(MAX), @colDel NVARCHAR(MAX)
	
// 		---Tính các phát sinh cuối kỳ
// 		IF OBJECT_ID('tempdb..#tmpSC') IS NOT NULL DROP Table #tmpSC
// 		IF OBJECT_ID('tempdb..#tmpSC1') IS NOT NULL DROP Table #tmpSC1
// 		IF OBJECT_ID('tempdb..#tmpCT') IS NOT NULL DROP Table #tmpCT
		
// 		select 
// 			ROW_NUMBER() OVER ( order by sc.stt_rec asc ) as STT,sc.stt_rec, 0 as Parent,sc.Ngay_ct as NgayHachToan, sc.Ngay_lct as NgayChungTu,LTRIM(RTRIM(sc.So_ct)) as SoChungTu,
// 			sc.Ngay_ct as NgayHoaDon,sc.So_ct as SoHoaDon,sc.ma_ct as MaChungTu,sc.dien_giai as DienGiai,sc.ps_no_nt as PhatSinhNoNt,sc.ps_co_nt as PhatSinhCoNt,
// 			sc.ps_no as PhatSinhNo,sc.ps_co as PhatSinhCo,0 as SoLuong,	0 as Gia,0 as Tien, sc.line_nbr
// 		into #tmpSC
// 		from Tbl_SoCai sc
// 		where sc.IsDel = 0 and sc.stt_rec is not null and sc.tk like @taikhoan+'%' and Ngay_ct between @ngayHachToanFrom and @ngayHachToanTo and ma_kh like @ma_NCC+'%'
// 		order by line_nbr asc

// 		SELECT DISTINCT stt_rec, SoChungTu, MaChungTu INTO #tmpSC1 FROM #tmpSC
		
// 		SET @strResult = ' select -3 as STT, '''' as stt_rec, 0 as Parent,'''' as NgayHachToan,'''' as NgayChungTu,'''' as SoChungTu,'''' as NgayHoaDon, '''' as SoHoaDon,'''' as MaChungTu, N''SỐ DƯ ĐẦU KỲ'' as DienGiai, du_no_nt00 - du_co_nt00 as PhatSinhNoNt, du_co_nt00 - du_no_nt00 as PhatSinhCoNt, du_no00 - du_co00 as PhatSinhNo, du_co00 - du_no00 as PhatSinhCo, 0 as SoLuong, 0 as Gia, 0 as Tien, 0 as line_nbr FROM DuDauKi_CongNo WHERE tk like '''+@taikhoan+'%'' and nam = YEAR('''+@ngayHachToanFrom+''') and ma_kh like '''+@ma_NCC+'%'' 
// 		 UNION ALL select -2 as STT, '''' as stt_rec, 0 as Parent,'''' as NgayHachToan,'''' as NgayChungTu,'''' as SoChungTu,'''' as NgayHoaDon, '''' as SoHoaDon,'''' as MaChungTu, N''PHÁT SINH TRONG KỲ'' as DienGiai, 0 as PhatSinhNoNt, 0 as PhatSinhCoNt, 0 as PhatSinhNo, 0 as PhatSinhCo, 0 as SoLuong, 0 as Gia, 0 as Tien, 0 as line_nbr UNION ALL select -1 as STT, '''' as stt_rec, 0 as Parent,'''' as NgayHachToan,'''' as NgayChungTu,'''' as SoChungTu,'''' as NgayHoaDon, '''' as SoHoaDon,'''' as MaChungTu, N''SỐ DƯ CUỐI KỲ'' as DienGiai, 0 as PhatSinhNoNt, 0 as PhatSinhCoNt, 0 as PhatSinhNo, 0 as PhatSinhCo, 0 as SoLuong, 0 as Gia, 0 as Tien, 0 as line_nbr
// 		'		

// 		SET @strResult = @strResult + ' UNION ALL select ROW_NUMBER() OVER ( order by sc.stt_rec asc ) as STT,sc.stt_rec, sc.Parent,sc.NgayHachToan, sc.NgayChungTu,sc.SoChungTu,sc.NgayHoaDon,sc.SoHoaDon,sc.MaChungTu,sc.DienGiai,sc.PhatSinhNoNt,sc.PhatSinhCoNt,sc.PhatSinhNo,sc.PhatSinhCo,sc.SoLuong,sc.Gia,sc.Tien, sc.line_nbr	from #tmpSC sc 	'

// 		IF @chiTietMatHang = 1

// 		BEGIN

// 			DECLARE CUR CURSOR FOR SELECT stt_rec, SoChungTu, MaChungTu FROM #tmpSC1

// 				DECLARE @stt int, @stt_rec nvarchar(max), @so_ct nvarchar(max),  @ma_ct nvarchar(max)

// 				OPEN CUR

// 					FETCH NEXT FROM CUR INTO @stt_rec, @so_ct, @ma_ct

// 					WHILE @@FETCH_STATUS = 0

// 						BEGIN
								
// 							SET @parent =( SELECT MAX(STT) FROM #tmpSC WHERE stt_rec = @stt_rec and SoChungTu = @so_ct )
// 							SET @strSTT = CONVERT(VARCHAR,@parent)
// 							SET @tenTbl = (SELECT LTRIM(RTRIM(m_ctdbf)) FROM Tbl_dmChungTu WHERE ma_ct = @ma_ct)
// 							SET @colDel = ( SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = ''+@tenTbl+'' AND COLUMN_NAME LIKE 'IsDel%')
// 							SET @colDel = CASE LEN(@colDel) WHEN 0 THEN '' ELSE  N'and tbl.'+@colDel+' = 0' END 

// 							IF COL_LENGTH(''+@tenTbl+'','tien2') IS NOT NULL
				
// 								BEGIN

// 									set @str = N' UNION ALL SELECT CONVERT(INT, '+@strSTT+') as STT,tbl.stt_rec, 1 as Parent,tbl.ngay_ct as NgayHachToan, tbl.ngay_ct as NgayChungTu,tbl.So_ct as SoChungTu, tbl.ngay_ct as NgayHoaDon,tbl.So_ct as SoHoaDon,tbl.ma_ct  as MaChungTu, ISNULL(LTRIM(RTRIM(tbl.ma_vt))+'' - ''+LTRIM(RTRIM(hh.TENHANG)), N''Hàng hóa'')  as DienGiai, 0 as PhatSinhNoNt, 0 as PhatSinhCoNt, 0 as PhatSinhNo, 0 as PhatSinhCo, tbl.so_luong as Soluong, tbl.gia2 as Gia, tbl.tien2 as Tien, tbl.line_nbr as line_nbr	FROM '+@tenTbl+' tbl LEFT JOIN Tbl_HangHoa_Tam hh on tbl.ma_vt = hh.IDMATHANG or tbl.ma_vt = hh.MAHANG WHERE tbl.stt_rec = '''+@stt_rec+''' and tbl.ma_ct = '''+@ma_ct+ ''' '+@colDel+' '

// 									set @strResult = @strResult + @str

// 								END

// 							FETCH NEXT FROM CUR INTO @stt_rec, @so_ct, @ma_ct
// 						END
// 				CLOSE CUR
// 				DEALLOCATE CUR

// 		END
		
// 		--IF @chiTietMatHang = 1 SET @strResult = @strResult  + N' ORDER BY STT ASC '
// 		--ELSE SET @strResult = @strResult  + N' ORDER BY sc.stt_rec asc, sc.line_nbr asc '
// 		SET @strResult = @strResult  + N' ORDER BY STT ASC '

// 		--PRINT @strResult
// 		EXECUTE sp_executesql   @strResult 

// 		---Tính các phát sinh cuối kỳ
// 		IF OBJECT_ID('tempdb..#tmpSC') IS NOT NULL DROP Table #tmpSC
// 		IF OBJECT_ID('tempdb..#tmpSC1') IS NOT NULL DROP Table #tmpSC1
// 		IF OBJECT_ID('tempdb..#tmpCT') IS NOT NULL DROP Table #tmpCT

// 	SET NOCOUNT OFF
// END





/// edited -> can run it

// USE [Dps_KeToan]
// GO
// /****** Object:  StoredProcedure [dbo].[sp_So_Doi_Chieu_Cong_No]    Script Date: 08/01/18 1:07:17 PM ******/
// SET ANSI_NULLS ON
// GO
// SET QUOTED_IDENTIFIER ON
// GO
// -- =============================================
// -- Author:		Anh Tuan 😍
// -- Create date: 27/07/2018
// -- Description:	Sổ đối chiếu công nợ
// -- =============================================
// ALTER PROCEDURE [dbo].[sp_So_Doi_Chieu_Cong_No]  
// 	@ngayHachToanFrom VARCHAR(20),
// 	@ngayHachToanTo VARCHAR(20),
// 	@taikhoan varchar(20),
// 	@ma_NCC nvarchar(60),
// 	@chiTietMatHang bit
// AS
// BEGIN
// 	SET NOCOUNT ON	

// 		--Một số khai báo tên biến
// 		DECLARE @tenTbl nvarchar(max), @str nvarchar(max), @parent int, @strSTT VARCHAR(10), @strResult nvarchar(MAX), @colDel NVARCHAR(MAX)
	
// 		---Tính các phát sinh cuối kỳ
// 		IF OBJECT_ID('tempdb..#tmpSC') IS NOT NULL DROP Table #tmpSC
// 		IF OBJECT_ID('tempdb..#tmpSC1') IS NOT NULL DROP Table #tmpSC1
// 		IF OBJECT_ID('tempdb..#tmpCT') IS NOT NULL DROP Table #tmpCT
		
// 		select 
// 			ROW_NUMBER() OVER ( order by sc.stt_rec asc ) as STT,sc.stt_rec, 0 as Parent,sc.Ngay_ct as NgayHachToan, sc.Ngay_lct as NgayChungTu,LTRIM(RTRIM(sc.So_ct)) as SoChungTu,
// 			sc.Ngay_ct as NgayHoaDon,sc.So_ct as SoHoaDon,sc.ma_ct as MaChungTu,sc.dien_giai as DienGiai,sc.ps_no_nt as PhatSinhNoNt,sc.ps_co_nt as PhatSinhCoNt,
// 			sc.ps_no as PhatSinhNo,sc.ps_co as PhatSinhCo,0 as SoLuong,	0 as Gia,0 as Tien, sc.line_nbr
// 		into #tmpSC
// 		from Tbl_SoCai sc
// 		where sc.IsDel = 0 and sc.stt_rec is not null and sc.tk like @taikhoan+'%' and Ngay_ct between @ngayHachToanFrom and @ngayHachToanTo and ma_kh like @ma_NCC+'%'
// 		order by line_nbr asc

// 		SELECT DISTINCT stt_rec, SoChungTu, MaChungTu INTO #tmpSC1 FROM #tmpSC
		
// 		SET @strResult = ' select -3 as STT, '''' as stt_rec, 0 as Parent,'''' as NgayHachToan,'''' as NgayChungTu,'''' as SoChungTu,'''' as NgayHoaDon, '''' as SoHoaDon,'''' as MaChungTu, N''SỐ DƯ ĐẦU KỲ'' as DienGiai, du_no_nt00 - du_co_nt00 as PhatSinhNoNt, du_co_nt00 - du_no_nt00 as PhatSinhCoNt, du_no00 - du_co00 as PhatSinhNo, du_co00 - du_no00 as PhatSinhCo, 0 as SoLuong, 0 as Gia, 0 as Tien, 0 as line_nbr FROM DuDauKi_CongNo WHERE tk like '''+@taikhoan+'%'' and nam = YEAR('''+@ngayHachToanFrom+''') and ma_kh like '''+@ma_NCC+'%'' 
// 		 UNION ALL select -2 as STT, '''' as stt_rec, 0 as Parent,'''' as NgayHachToan,'''' as NgayChungTu,'''' as SoChungTu,'''' as NgayHoaDon, '''' as SoHoaDon,'''' as MaChungTu, N''PHÁT SINH TRONG KỲ'' as DienGiai, 0 as PhatSinhNoNt, 0 as PhatSinhCoNt, 0 as PhatSinhNo, 0 as PhatSinhCo, 0 as SoLuong, 0 as Gia, 0 as Tien, 0 as line_nbr UNION ALL select -1 as STT, '''' as stt_rec, 0 as Parent,'''' as NgayHachToan,'''' as NgayChungTu,'''' as SoChungTu,'''' as NgayHoaDon, '''' as SoHoaDon,'''' as MaChungTu, N''SỐ DƯ CUỐI KỲ'' as DienGiai, 0 as PhatSinhNoNt, 0 as PhatSinhCoNt, 0 as PhatSinhNo, 0 as PhatSinhCo, 0 as SoLuong, 0 as Gia, 0 as Tien, 0 as line_nbr
// 		'		

// 		SET @strResult = @strResult + ' UNION ALL select ROW_NUMBER() OVER ( order by sc.stt_rec asc ) as STT,sc.stt_rec, sc.Parent,sc.NgayHachToan, sc.NgayChungTu,sc.SoChungTu,sc.NgayHoaDon,sc.SoHoaDon,sc.MaChungTu,sc.DienGiai,sc.PhatSinhNoNt,sc.PhatSinhCoNt,sc.PhatSinhNo,sc.PhatSinhCo,sc.SoLuong,sc.Gia,sc.Tien, sc.line_nbr	from #tmpSC sc 	'

// 		IF @chiTietMatHang = 1

// 		BEGIN

// 			DECLARE CUR CURSOR FOR SELECT stt_rec, SoChungTu, MaChungTu FROM #tmpSC1

// 				DECLARE @stt int, @stt_rec nvarchar(max), @so_ct nvarchar(max),  @ma_ct nvarchar(max)

// 				OPEN CUR

// 					FETCH NEXT FROM CUR INTO @stt_rec, @so_ct, @ma_ct

// 					WHILE @@FETCH_STATUS = 0

// 						BEGIN
								
// 							SET @parent =( SELECT MAX(STT) FROM #tmpSC WHERE stt_rec = @stt_rec and SoChungTu = @so_ct )

// 							SET @strSTT = CONVERT(VARCHAR,@parent)

// 							--SET @tenTbl = (SELECT LTRIM(RTRIM(m_ctdbf)) FROM Tbl_dmChungTu WHERE ma_ct = @ma_ct)
// 							--SET @colDel = ( SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = ''+@tenTbl+'' AND COLUMN_NAME LIKE 'IsDel%')
// 							--SET @colDel = CASE LEN(@colDel) WHEN 0 THEN '' ELSE  N'and tbl.'+@colDel+' = 0' END 

// 							--IF COL_LENGTH(''+@tenTbl+'','tien2') IS NOT NULL
				
// 								BEGIN

// 									set @str = N' UNION ALL SELECT CONVERT(INT, '+@strSTT+') as STT,tbl.stt_rec, 1 as Parent,
// 									tbl.ngay_ct as NgayHachToan, 
// 									tbl.ngay_ct as NgayChungTu,tbl.So_ct as SoChungTu, tbl.ngay_ct as NgayHoaDon,tbl.So_ct as SoHoaDon,
// 									tbl.ma_ct  as MaChungTu, 
// 									ISNULL(LTRIM(RTRIM(tbl.ma_vt))+'' - ''+LTRIM(RTRIM(hh.TENHANG)), N''Hàng hóa'')  as DienGiai, 
// 									0 as PhatSinhNoNt, 0 as PhatSinhCoNt, 0 as PhatSinhNo, 0 as PhatSinhCo, tbl.sl_nhap + tbl.sl_xuat as Soluong, 
// 									tbl.gia2 as Gia, tbl.tien2 as Tien, tbl.line_nbr as line_nbr	FROM Tbl_TheKho tbl 
// 									LEFT JOIN Tbl_HangHoa_Tam hh on tbl.ma_vt = hh.IDMATHANG or tbl.ma_vt = hh.MAHANG 
// 									WHERE tbl.stt_rec = '''+@stt_rec+''' and tbl.IsDel = 0 '

// 									--PRINT @str

// 									set @strResult = @strResult + @str

// 								END

// 							FETCH NEXT FROM CUR INTO @stt_rec, @so_ct, @ma_ct
// 						END
// 				CLOSE CUR
// 				DEALLOCATE CUR

// 		END
		
// 		--IF @chiTietMatHang = 1 SET @strResult = @strResult  + N' ORDER BY STT ASC '
// 		--ELSE SET @strResult = @strResult  + N' ORDER BY sc.stt_rec asc, sc.line_nbr asc '
// 		SET @strResult = @strResult  + N' ORDER BY STT ASC '

// 		--PRINT @strResult
// 		EXECUTE sp_executesql   @strResult 

// 		---Tính các phát sinh cuối kỳ
// 		IF OBJECT_ID('tempdb..#tmpSC') IS NOT NULL DROP Table #tmpSC
// 		IF OBJECT_ID('tempdb..#tmpSC1') IS NOT NULL DROP Table #tmpSC1
// 		IF OBJECT_ID('tempdb..#tmpCT') IS NOT NULL DROP Table #tmpCT

// 	SET NOCOUNT OFF
// END







