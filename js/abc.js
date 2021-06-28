(function(){

    
    Array.prototype.lowerCaseArr = function()
    {
        this.map((item, index) =>{
            return item.trim().toLowerCase();
        });
    }

    Array.prototype.diff = function(a) {
        return this.filter(function(i) {return a.indexOf(i) < 0;});
    };

    function diff2Array(arr1, arr2)
    {
        return arr1.diff(arr2);
    }

    function runDiff()
    {
        let arr1, arr2, arrResult;
        arr1 = "Stt_rec,Stt_rec0,Ma_dvcs,Ma_ct,Loai_ct,Ma_gd,Ma_nk,Nxt,Ct_dc,Pn_gia_tb,Px_gia_dd,Ngay_lct,Ngay_ct,So_ct,So_seri,So_lo,Ngay_lo,Ma_kh,Ma_khon,Ma_kho,Ma_vi_trin,Ma_vi_tri,Ong_ba,Dien_giai,Ma_vv,Ma_nx,Tk_du,Ma_nt,Ty_gia,Ma_vt,Ma_lo,Dvt1,TenDvt1,Sl_nhap1,Sl_xuat1,He_so1,Gia_nt1,Gia1,Gia01,Gia_nt01,Gia21,Gia_nt21,Tk_vt,Tk_gv,Tk_dt,Sl_nhap,Sl_xuat,Gia_nt,Gia,Tien_nt_n,Tien_nt_x,Tien_nhap,Tien_xuat,Gia_nt0,Gia0,Tien_nt0,Tien0,Gia_nt2,Gia2,Tien_nt2,Tien2,Ma_tt,Thue_suat,Thue_nt,Thue,Tk_thue_no,Tk_thue_co,Ngay_ct0,So_ct0,So_seri0,Line_nbr,Status,Datetime0,Datetime2,User_id0,User_id2,IsDel";
        arr2 = "Stt_rec,Stt_rec0,Ma_dvcs,Ma_ct,Loai_ct,Ma_gd,Ma_nk,Nxt,Ct_dc,Pn_gia_tb,Px_gia_dd,Ngay_lct,Ngay_ct,So_ct,So_seri,So_lo,Ngay_lo,Ma_kh,Ma_khon,Ma_kho,Ma_vi_trin,Ma_vi_tri,Ong_ba,Dien_giai,Ma_vv,Ma_sp,Ma_bp,So_lsx,Ma_hd,Ma_ku,Ma_phi,So_dh2,So_dh3,Ma_nvbh,Ma_nv,Ma_nx,Tk_du,Ma_nt,Ty_gia,Ma_vt,Ma_lo,Dvt1,TenDvt1,Sl_nhap1,Sl_xuat1,He_so1,Gia_nt1,Gia1,Gia01,Gia_nt01,Gia21,Gia_nt21,Tk_vt,Tk_gv,Tk_dt,Sl_nhap,Sl_xuat,Gia_nt,Gia,Tien_nt_n,Tien_nt_x,Tien_nhap,Tien_xuat,Gia_nt0,Gia0,Tien_nt0,Tien0,Cp_vc,Cp_vc_nt,Cp_bh,Cp_bh_nt,Cp_khac,Cp_khac_nt,Cp_nt,Cp,Thue_suat_nk,Nk_nt,Nk,Tk_thue_nk,Thue_suat_ttdb,Ttdb_nt,Ttdb,Tk_thue_ttdb,Gia_nt2,Gia2,Tien_nt2,Tien2,Ma_tt,Cp_thue_yn,Thue_suat,Thue_nt,Thue,Tk_thue_no,Tk_thue_co,Tl_ck,Ck_nt,Ck,Tk_ck,Stt_rec_pn,Stt_rec0pn,Stt_rec_px,Stt_rec0px,Stt_rec_dc,Stt_rec_yc,Stt_rec0yc,Ngay_ct0,So_ct0,So_seri0,Nam,Ky,Line_nbr,Status,Datetime0,Datetime2,User_id0,User_id2,Ma_td1,Ma_td2,Ma_td3,Sl_td1,Sl_td2,Sl_td3,Ngay_td1,Ngay_td2,Ngay_td3,Gc_td1,Gc_td2,Gc_td3,S1,S2,S3,S4,S5,S6,S7,S8,S9,IsDel,IDHoaDon,DPSLoaiPhieu";
        //arrResult = diff2Array(arr1.toLowerCase().split(","), arr2.toLowerCase().split(","));
        arr1 = arr1.toLowerCase().split(",");
        arr2 = arr2.toLowerCase().split(",");
        arrResult =arr2.subtract(arr1);
        console.log(arrResult.join(","));

        updateTbl();
    }

    function updateTbl(){
        let arr1, arr2;

        arr1 = `ck,ck_nt,cp,cp_bh,cp_bh_nt,cp_khac,cp_khac_nt,
        cp_nt,cp_thue_yn,cp_vc,cp_vc_nt,
        ky,ma_bp,ma_hd,ma_ku,ma_nv,ma_nvbh,ma_phi,ma_sp,
        nam,nk,nk_nt,so_dh2,so_dh3,stt_rec0pn,stt_rec0px,stt_rec0yc,stt_rec_dc,stt_rec_pn,
        stt_rec_px,stt_rec_yc,thue_suat_nk,thue_suat_ttdb,tk_ck,tk_thue_nk,
        tk_thue_ttdb,tl_ck,ttdb,ttdb_nt,`;
        arr1 = arr1.split(",");

        arr2 = `@ck9,@ck_nt9,@cp9,@cp_bh9,@cp_bh_nt9,@cp_khac9,@cp_khac_nt9,
        @cp_nt9,@cp_thue_yn9,@cp_vc9,@cp_vc_nt9,@ky9,@ma_bp9,@ma_hd9,
        @ma_ku9,@ma_nv9,@ma_nvbh9,@ma_phi9,@ma_sp9,
        @nam9,@nk9,@nk_nt9,@so_dh29,@so_dh39,@stt_rec0pn9,@stt_rec0px9,
        @stt_rec0yc9,@stt_rec_dc9,@stt_rec_pn9,
        @stt_rec_px9,@stt_rec_yc9,@thue_suat_nk9,@thue_suat_ttdb9,
        @tk_ck9,@tk_thue_nk9,@tk_thue_ttdb9,@tl_ck9,@ttdb9,@ttdb_nt9,`;
        arr2 = arr2.split(",");

        let s = "";
        arr1.map((item, index) => {
            s += "conds.Add(\""+arr1[index].trim()+"\" + keyReplCT,DBNull.Value);\n";
        });

        console.log(s);
    }

    function trick(){
        let a =  `obj.Gia_Nt0 = item.;        
        obj.Gia0 = item.;
        obj.GiaOrg_Nt = item.;
        obj.GiaOrg = item.;
        obj.Tien_Nt0 = item.;
        obj.Tien0 = item.;
        obj.TienOrg_Nt = item.;
        obj.TienOrg = item.;
        obj.Thue_Nt = item.;
        obj.Thue = item.;
        obj.Tt_Nt = item.;
        obj.Tt = item.;
        obj.Cp_Bh_Nt = item.;
        obj.Cp_Bh = item.;
        obj.Cp_Vc_Nt = item.;
        obj.Cp_Vc = item.;
        obj.Cp_Nt = item.;
        obj.Cp = item.;
        obj.Cp_Khac_Nt = item.;
        obj.Cp_Khac = item.;
        obj.TienHang_Nt = item.;
        obj.TienHang = item.;`;
        a = a.split(";");
        a.map((item, index) => {
           let b = item.split("=");
           let d = b.split("."); 
        });
    }

    //runDiff();


    // split string ofr select
    function selectJson(){

        let v = `Stt_rec,Ma_dvcs,Loai_ct,Ma_ct,Ngay_ct,Ngay_lct,
        So_ct,So_ctgs,Ngay_ctgs,So_lo,Ngay_lo,Ong_ba,Head_item,
        Dien_giai_h,Dien_giai,Nh_dk,Tk,Tk_du,Ps_no_nt,Ps_co_nt,
        Ma_nt,Ty_gia,Ps_no,Ps_co,Ma_kh,Ma_vv,Ma_nk,Ma_sp,Ma_bp,
        So_lsx,So_ct0,Ngay_ct0,Ct_nxt,Ma_gd,Nam,Ky,Gt_no,Gt_co,
        Gt_tinh,Gt_dd,Sua_tg_yn,Line_nbr,Status,Datetime0,Datetime2,
        User_id0,User_id2,Ma_hd,Ma_ku,Ma_phi,So_dh,IsDel,IDHoaDon,
        DPSLoaiPhieu,IDKHDPS`;

        let arr = v.split(",");
        arr.filter((item, index) => { return item.trim().length > 0 && item != "" });

        let s = "";
        arr.map((item, index) => {
            s += "\n"+item.trim()+" = r[\""+item.trim()+"\"].ToString(),"
        });

        console.log(s);

    }

    //selectJson();

    function ngTable(){
        let v = "Stt_rec,MaDonVi,LoaiChungTu,MaChungTu,NgayHachToan,NgayLapChungTu,SoChungTu,SoChungTu_Gs,NgayChungTu_Gs,SoLo,NgayLo,OngBa,HeadItem,DienGiai_H,DienGiai,NhomDinhKhoang,TaiKhoan,TaiKhoanDu,PhatSinhNoNguyenTe,PhatSinhCoNguyenTe,MaNguyenTe,TyGia,PhatSinhNo,PhatSinhCo,MaKhachHang,MaVuViec,Ma_nk,Ma_sp,MaBoPhan,So_lsx,SoHoaDon,NgayHoaDon,Ct_nxt,MaGiaoDich,Nam,Ky,Gt_no,Gt_co,Gt_tinh,Gt_dd,Sua_tg_yn,Line_nbr,Status,Datetime0,Datetime2,User_id0,User_id2,Ma_hd,Ma_ku,Ma_phi,So_dh,IsDel,IDHoaDon,DPSLoaiPhieu,IDKHDPS,";
        let arr = v.split(",");
        arr.filter((item, index) => {
            return item.trim.length > 1 && item != "";
        });

        let s = "";
        arr.map((item, index) => {
            s += `\n<td ng-if="DuocHienThi[${index+1}]?true:false" data-title="'aaa'" filter="{${item}: 'text'}" sortable="'${item}'">{{row.${item}}}</td>`;
        });
        console.log(s);
    }

    //ngTable();

    function showAllCols(){
        let s = "[";
        for(let i = 0;i<57;i++)
        {
            s += "true,";
        }
        console.log(s+"]");
    }
    //showAllCols();

    String.prototype.capitalize = function() {
        return this.charAt(0).toLocaleLowerCase() + this.slice(1);
    }
    function generatorCode(){
        let s = `parent public class DieuKienLoc
        +{
            *prop public string TuNgay 
            *prop public string DenNgay 
            *prop public string MaKho 
            *prop public string NhomKho 
            *prop public string MaVatTu 
            *prop public string NhomVatTu1 
            *prop public string NhomVatTu2 
            *prop public string NhomVatTu3 
            *prop public string LoaiVatTu 
            *prop public string DonVi 
            *prop public string MauBaoCao 
            *prop public string TieuDe 
        }>
        
        parent public class LuaChon
        +{
            *prop public string NhomTheo 
            *prop public string PhatSinhDieuChuyen 
            *prop public string InVatTu 
            *prop public string CotSoLuong 
            *prop public string ThuTuSapXep1 
            *prop public string ThuTuSapXep2 
            *prop public string ThuTuSapXep3 
        }>
    
        parent public class LocChiTiet
        +{
                *prop public string Va_Hoac 
                *prop public string Khong 
                *prop public string MoNgoac 
                *prop public string Truong 
                *prop public string PT 
                *prop public string GiaTri 
                *prop public string DongNgoac 
        }>
    
        parent public class ThuTuSapXep
        +{
            *prop public string MaVatTuChon 
            *prop public string MaVatTuGiamDan 
    
            *prop public string NhomVatTuChon 
            *prop public string NhomVatTuGiamDan 
    
            *prop public string TenVatTuChon 
            *prop public string TenVatTuGiamDan 
        }>
    
        parent public class DieuKienMau
        +{
            *prop public string TatCaNSD 
            *prop public string TenBaoCao 
        }>`;

        let arr = s.split(">");
        let str = "";
        arr.filter((item, index) => { return item.trim().length > 0 && item != ""; } )
        arr.map((item, index) => {

            let arrParent = item.split("+");
            arrParent.map((item, index) => {

                if(index == 0)
                    str += item.trim().replace("parent public class")+" : {";
                else
                {
                    let str2 = item.split("*prop public string");
                    str2.filter((item2, index2) => {
                        return item2.length > 0 && item2 != "";
                    });

                    str2.map((item3, index3) => {
                        str += item3+":\"\",";
                        str += "\n";
                    });

                    str+="},";
                }

                str+="},";

            });

        });

        console.log(str);

    }

    function genCode2(){
        let s = "Stt, Mã vật tư, Tên vật tư, Tồn đầu, Dư đầu, Dư đầu nt, Số lượng nhập, Tiền nhập, Số lượng xuất, Tiền xuất, Tiền xuất nt, Tồn cuối, Dư cuối, Dư cuối nt";
        let s1 = "Stt, MaVatTu, TenVatTu, TonDau, DuDau, DuDauNt, SoLuongNhap, TienNhap, SoLuongXuat, TienXuat, TienXuatNt, TonCuoi, DuCuoi,DuCuoiNt";
        let arr = s.split(",");
        let arr2 = s1.split(",");
        arr.filter((item, index) => { return item.length > 0 && item != ""; } );

        let result = "";
        arr.map((item, index) => {
            let key = arr2[index].trim();
            result += `\n<td ng-if="DuocHienThi[${(index+1)}]?true:false" data-title="'${item.trim()}'" filter="{${key}: 'text'}" sortable="'${key}'">{{row.${key}}}</td>`;
        });

        console.log(result);

    }

    //genCode2();


    String.prototype.capitalize = function(){
        return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase();
        } );
    };

    function genCodeTbl()
    {
        // string src = "ứ2134h3434b23kljklj";
        // string pt = @"\d+"; //tìm số,  [a-zA-Z\p{L}] tìm chữ và Unicode, [^0-9] tìm số

        // Regex re = new Regex(pt);
        // Match m = re.Match(src);
        // Dùng Match.Success để biết có thành công hay không



        let s = `,Tài khoản ,Dư nợ đầu kỳ nt ,Dư có đầu kỳ nt ,Phát sinh nợ nt ,Phát sinh có nt ,Dư nợ cuối kỳ nt ,Dư có cuối kỳ nt, Tên tài khoản ,Dư nợ đầu kỳ ,Dư có đầu kỳ ,Phát sinh nợ ,Phát sinh có ,Dư nợ cuối kỳ ,Dư có cuối kỳ  `;
        
        let arr = s.split(",");
        let result = "", selSQL = "";
        arr.filter((item, index) => {
            return item.trim().length > 0 && item !=""
        });

        arr.map((item, index) => {
            let removeUnicode = change_alias(item.trim());
            removeUnicode = removeUnicode.capitalize();
            var str = removeUnicode.replace(/ /g, '');
            item = item.capitalize();
            selSQL += "\n, 0 as "+str;
            result += `\n<td ng-if="DuocHienThi[${index+1}]?true:false" data-title="'${item}" filter="{${str}: 'text'}" sortable="'${str}'">{{row.${str}}}</td> `;
        }); 
        console.log("================================================");
        console.log(selSQL);
        console.log("================================================");
        console.log(result);

    }

    //genCodeTbl();

    function genCode_28_06_2018(){

        let objReturn = [];

        let s, arr, result;
        s = `
        tk	
		, tk_me1
		--, case tk_me1 , -2)
		--	when 0 then 0
		--	else tbl.tk_me1
		--end as tk_me1

		,  DuNoDauKyNt
		, DuCoDauKyNt
		,  tkPhatSinhNoNt
		,  tkPhatSinhCoNt
		,  DuNoCuoiKyNt
		,  DuCoCuoiKyNt

		, tbl.ten_tk1

		, DuNoDauKy
		,  DuCoDauKy															
		, tkPhatSinhNo
		, tkPhatSinhCo 
		,  DuNoCuoiKy
		, DuCoCuoiKy
        `;

        arr = s.split(",");
        arr.filter((item, index) =>{
            return item.trim().length > 0 && item != "";
        });

        arr.map((item, index) =>{
            result += `\n${item.trim()} = r[\"${item.trim()}\"].ToString(),`;
        });

        objReturn.push(result);


        // gen code html
        let s1, arr1, result1="";

        s1 = `TongDuNoDauKyNt ,
        TongDuCoDauKyNt ,

        TongPhatSinhNoNt ,
        TongPhatSinhCoNt ,

        TongDuNoCuoiKyNt ,
        TongDuCoCuoiKyNt ,

        TongDuNoDauKy ,
        TongDuCoDauKy ,

        TongPhatSinhNo ,
        TongPhatSinhCo ,

        TongDuNoCuoiKy ,
        TongDuCoCuoiKy ,`;

        arr1 = s1.split(",");
        arr1.filter((item, index) =>{
            return item.trim().length >0 && item !="";
        });

        arr1.map((item, index ) => {
            
            result1 += `\n$scope.DataModel.${item.trim()} = resDSPM.tongcong.${item.trim()};`;
        });

        console.log(result1);

    }

    // genCode_28_06_2018();

    function getFlagEmoji()
    {
        let s = `
        
        🏁 Chequered Flag;🚩 Triangular Flag;🎌 Crossed Flags;🏴 Black Flag;🏳 White Flag;🏳️‍🌈 Rainbow Flag;🏴‍☠️ Pirate Flag;🇦🇨 Ascension Island;🇦🇩 Andorra;🇦🇪 United Arab Emirates;🇦🇫 Afghanistan;🇦🇬 Antigua & Barbuda;🇦🇮 Anguilla;🇦🇱 Albania;🇦🇲 Armenia;🇦🇴 Angola;🇦🇶 Antarctica;🇦🇷 Argentina;🇦🇸 American Samoa;🇦🇹 Austria;🇦🇺 Australia;🇦🇼 Aruba;🇦🇽 Åland Islands;🇦🇿 Azerbaijan;🇧🇦 Bosnia & Herzegovina;🇧🇧 Barbados;🇧🇩 Bangladesh;🇧🇪 Belgium;🇧🇫 Burkina Faso;🇧🇬 Bulgaria;🇧🇭 Bahrain;🇧🇮 Burundi;🇧🇯 Benin;🇧🇱 St. Barthélemy;🇧🇲 Bermuda;🇧🇳 Brunei;🇧🇴 Bolivia;🇧🇶 Caribbean Netherlands;🇧🇷 Brazil;🇧🇸 Bahamas;🇧🇹 Bhutan;🇧🇻 Bouvet Island;🇧🇼 Botswana;🇧🇾 Belarus;🇧🇿 Belize;🇨🇦 Canada;🇨🇨 Cocos (Keeling) Islands;🇨🇩 Congo - Kinshasa;🇨🇫 Central African Republic;🇨🇬 Congo - Brazzaville;🇨🇭 Switzerland;🇨🇮 Côte D’Ivoire;🇨🇰 Cook Islands;🇨🇱 Chile;🇨🇲 Cameroon;🇨🇳 China;🇨🇴 Colombia;🇨🇵 Clipperton Island;🇨🇷 Costa Rica;🇨🇺 Cuba;🇨🇻 Cape Verde;🇨🇼 Curaçao;🇨🇽 Christmas Island;🇨🇾 Cyprus;🇨🇿 Czechia;🇩🇪 Germany;🇩🇬 Diego Garcia;🇩🇯 Djibouti;🇩🇰 Denmark;🇩🇲 Dominica;🇩🇴 Dominican Republic;🇩🇿 Algeria;🇪🇦 Ceuta & Melilla;🇪🇨 Ecuador;🇪🇪 Estonia;🇪🇬 Egypt;🇪🇭 Western Sahara;🇪🇷 Eritrea;🇪🇸 Spain;🇪🇹 Ethiopia;🇪🇺 European Union;🇫🇮 Finland;🇫🇯 Fiji;🇫🇰 Falkland Islands;🇫🇲 Micronesia;🇫🇴 Faroe Islands;🇫🇷 France;🇬🇦 Gabon;🇬🇧 United Kingdom;🇬🇩 Grenada;🇬🇪 Georgia;🇬🇫 French Guiana;🇬🇬 Guernsey;🇬🇭 Ghana;🇬🇮 Gibraltar;🇬🇱 Greenland;🇬🇲 Gambia;🇬🇳 Guinea;🇬🇵 Guadeloupe;🇬🇶 Equatorial Guinea;🇬🇷 Greece;🇬🇸 South Georgia & South Sandwich Islands;🇬🇹 Guatemala;🇬🇺 Guam;🇬🇼 Guinea-Bissau;🇬🇾 Guyana;🇭🇰 Hong Kong SAR China;🇭🇲 Heard & McDonald Islands;🇭🇳 Honduras;🇭🇷 Croatia;🇭🇹 Haiti;🇭🇺 Hungary;🇮🇨 Canary Islands;🇮🇩 Indonesia;🇮🇪 Ireland;🇮🇱 Israel;🇮🇲 Isle of Man;🇮🇳 India;🇮🇴 British Indian Ocean Territory;🇮🇶 Iraq;🇮🇷 Iran;🇮🇸 Iceland;🇮🇹 Italy;🇯🇪 Jersey;🇯🇲 Jamaica;🇯🇴 Jordan;🇯🇵 Japan;🇰🇪 Kenya;🇰🇬 Kyrgyzstan;🇰🇭 Cambodia;🇰🇮 Kiribati;🇰🇲 Comoros;🇰🇳 St. Kitts & Nevis;🇰🇵 North Korea;🇰🇷 South Korea;🇰🇼 Kuwait;🇰🇾 Cayman Islands;🇰🇿 Kazakhstan;🇱🇦 Laos;🇱🇧 Lebanon;🇱🇨 St. Lucia;🇱🇮 Liechtenstein;🇱🇰 Sri Lanka;🇱🇷 Liberia;🇱🇸 Lesotho;🇱🇹 Lithuania;🇱🇺 Luxembourg;🇱🇻 Latvia;🇱🇾 Libya;🇲🇦 Morocco;🇲🇨 Monaco;🇲🇩 Moldova;🇲🇪 Montenegro;🇲🇫 St. Martin;🇲🇬 Madagascar;🇲🇭 Marshall Islands;🇲🇰 Macedonia;🇲🇱 Mali;🇲🇲 Myanmar (Burma);🇲🇳 Mongolia;🇲🇴 Macau SAR China;🇲🇵 Northern Mariana Islands;🇲🇶 Martinique;🇲🇷 Mauritania;🇲🇸 Montserrat;🇲🇹 Malta;🇲🇺 Mauritius;🇲🇻 Maldives;🇲🇼 Malawi;🇲🇽 Mexico;🇲🇾 Malaysia;🇲🇿 Mozambique;🇳🇦 Namibia;🇳🇨 New Caledonia;🇳🇪 Niger;🇳🇫 Norfolk Island;🇳🇬 Nigeria;🇳🇮 Nicaragua;🇳🇱 Netherlands;🇳🇴 Norway;🇳🇵 Nepal;🇳🇷 Nauru;🇳🇺 Niue;🇳🇿 New Zealand;🇴🇲 Oman;🇵🇦 Panama;🇵🇪 Peru;🇵🇫 French Polynesia;🇵🇬 Papua New Guinea;🇵🇭 Philippines;🇵🇰 Pakistan;🇵🇱 Poland;🇵🇲 St. Pierre & Miquelon;🇵🇳 Pitcairn Islands;🇵🇷 Puerto Rico;🇵🇸 Palestinian Territories;🇵🇹 Portugal;🇵🇼 Palau;🇵🇾 Paraguay;🇶🇦 Qatar;🇷🇪 Réunion;🇷🇴 Romania;🇷🇸 Serbia;🇷🇺 Russia;🇷🇼 Rwanda;🇸🇦 Saudi Arabia;🇸🇧 Solomon Islands;🇸🇨 Seychelles;🇸🇩 Sudan;🇸🇪 Sweden;🇸🇬 Singapore;🇸🇭 St. Helena;🇸🇮 Slovenia;🇸🇯 Svalbard & Jan Mayen;🇸🇰 Slovakia;🇸🇱 Sierra Leone;🇸🇲 San Marino;🇸🇳 Senegal;🇸🇴 Somalia;🇸🇷 Suriname;🇸🇸 South Sudan;🇸🇹 São Tomé & Príncipe;🇸🇻 El Salvador;🇸🇽 Sint Maarten;🇸🇾 Syria;🇸🇿 Swaziland;🇹🇦 Tristan Da Cunha;🇹🇨 Turks & Caicos Islands;🇹🇩 Chad;🇹🇫 French Southern Territories;🇹🇬 Togo;🇹🇭 Thailand;🇹🇯 Tajikistan;🇹🇰 Tokelau;🇹🇱 Timor-Leste;🇹🇲 Turkmenistan;🇹🇳 Tunisia;🇹🇴 Tonga;🇹🇷 Turkey;🇹🇹 Trinidad & Tobago;🇹🇻 Tuvalu;🇹🇼 Taiwan;🇹🇿 Tanzania;🇺🇦 Ukraine;🇺🇬 Uganda;🇺🇲 U.S. Outlying Islands;🇺🇳 United Nations;🇺🇸 United States;🇺🇾 Uruguay;🇺🇿 Uzbekistan;🇻🇦 Vatican City;🇻🇨 St. Vincent & Grenadines;🇻🇪 Venezuela;🇻🇬 British Virgin Islands;🇻🇮 U.S. Virgin Islands;🇻🇳 Vietnam;🇻🇺 Vanuatu;🇼🇫 Wallis & Futuna;🇼🇸 Samoa;🇽🇰 Kosovo;🇾🇪 Yemen;🇾🇹 Mayotte;🇿🇦 South Africa;🇿🇲 Zambia;🇿🇼 Zimbabwe;🏴󠁧󠁢󠁥󠁮󠁧󠁿 England;🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland;🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales;
        
        `;

        let arr = s.split(";");
        


    }
    
 function gencode_12_07_2018(){
     let s = `stt_rec,stt_rec0,ma_ct,ngay_ct,so_ct,tt_qd
     ,tk_no,tien_nt,tien,ma_thue,tk_thue,thue_suat,loai_hd,thue,thue_nt,tt,tt_nt
     ,ngay_ct0,so_ct0,so_seri0,mau_bc,ma_tc,ma_kh,ten_kh,dia_chi,ma_so_thue,line_nbr,ma_kh2
     ,IsDel,IDKHDPS`;

     let arr = s.split(",");
     arr.filter((item, index) => {
        return item.length > 0 && item != null;
     });

     let p = "";

     arr.map((item, index) => {
        item = item.trim().replace("\n","");
        p +=  "@"+item+",";

     });

     console.log(p);

 }

//  gencode_12_07_2018();

function gencode_14_07_2018(){
    let s = `@stt_rec0,@ma_ct,@ngay_ct,@so_ct,@tt_qd,
    @tk_no9,@tien_nt9,@tien9,@ma_thue,@tk_thue,@thue_suat,@loai_hd9,@thue9,@thue_nt9,@tt9,@tt_nt9,
    @ngay_ct0,@so_ct0,@so_seri0,@mau_bc,@ma_tc,@ma_kh,@ten_kh,@dia_chi,@ma_so_thue,@ma_kh2,
    @IsDel,@IDKHDPS,@line_nbr9ClauseIns`;

    let arr = s.split(",");
    //arr.filter((item, index) => { return item.indexOf('9') != -1; })
    let result = "";
    arr.map((item, index) => {
        let cols = item.replace("@","").replace("9","");
        let vals = item.trim().replace("\n","");
        result += "\n"+cols+" = "+vals+",";
    });

    console.log(result);
}

// gencode_14_07_2018();

function gencode_16_07_2018(){
    let s = `@ma_ct,@ngay_ct,@so_ct,@id_vt9,@ma_vt9,@ten_vt9,@id_dvt9,@dvt9,@he_so9,
    @ma_kho,@id_kho,@ten_kho,@ma_vi_tri9,@ma_lo9,@ma_vv9,@tk_vt9,@so_luong9,@gia09,@gia_nt09,
    @gia9,@gia_nt9,@tien09,@tien_nt09,@tien9,@tien_nt9,@thue9,@thue_nt9,@tt9,@tt_nt9,
    @cp_bh9,@cp_bh_nt9,@cp_vc9,@cp_vc_nt9,@cp_khac9,@cp_khac_nt9,@cp9,@cp_nt9,
    @stt_rec_hd9,@stt_rec0hd9,@line_nbr9ClauseIns,`;

    let s2 = `@ma_ct,@ngay_ct,@so_ct,@ma_vt,@dvt,@he_so,@ma_kho,
    @tk_vt,@so_luong,@gia_nt,@gia,@gia_nt0,@gia0,@tien_nt,@tien,@thue,@thue_nt,@tt,@tt_nt,
    @tien0,@tien_nt0,@cp_bh,@cp_bh_nt,@cp_vc,@cp_vc_nt,@cp_khac,@cp_khac_nt,@cp,@cp_nt,@line_nbr,
    @ma_nx,@tk_cpxt,@px_gia_dd,@thue_suat,@thue_suat_nk,@nk,@nk_nt,@thue_suat_ttdb,@ttdb,
    @ttdb_nt,@tien_hang,@tien_hang_nt,
    @line_nbr9ClauseIns,`;

    let arr1 = s2.split(",");
    let giong = "", khac = "", nt = "";
    arr1.filter((itemf, indexf) => {
        return itemf.trim().length > 0 && itemf.trim() != "";
    }).map((item, index) => {
        if(s.indexOf(item.trim()+",") >= 0)
        {
            nt += item.trim()+",";
        }
        else
        {
            if(s.indexOf(item.trim()+"9,") >= 0)
            {
                giong += item.trim()+"9,";
            }
            else{
                khac += item.trim()+"9,";
            }
        }
            
    });

    console.log(nt+" ---- "+giong+" ---- "+khac);
}

function gencode_17_07_2018(){
    let s = `@ma_ct,@ngay_ct,@so_ct,@tt_qd9,
    @tk_no9,@tien_nt9,@tien9,@ma_thue,@tk_thue,@thue_suat,@loai_hd9,@thue9,@thue_nt9,@tt9,@tt_nt9,
    @ngay_ct0,@so_ct0,@so_seri0,@mau_bc,@ma_tc,@ma_kh,@ten_kh,@dia_chi,@ma_so_thue,@ma_kh2,
    @IsDel,@IDKHDPS,@line_nbr9ClauseIns`;
    let arr = s.split(",");
    arr = arr.filter((item, index) => { return item.includes("9"); });

    let result = "";
    arr.map((item, index) => {
        result += "\nconds.Add(\""+item.trim().replace("@","").replace("9","")+"\" + keyReplCT, 999);";
    });

    console.log(result);

}

gencode_17_07_2018();

function gencode_19_07_2018(){

    let s1 = `@ma_ct,@ngay_ct,@so_ct,@ma_kho,
    @ma_vi_tri9,@ma_lo9,@ma_vv9,
    @ma_vt9,@dvt9,@he_so9,@tk_vt9,@so_luong9,@gia_nt9,@gia9,@gia_nt09,@gia09,
    @tien_nt9,@tien9,@thue9,@thue_nt9,@tt9,@tt_nt9,@tien09,@tien_nt09,@cp_bh9,
    @cp_bh_nt9,@cp_vc9,@cp_vc_nt9,@cp_khac9,@cp_khac_nt9,@cp9,@cp_nt9,
    
    @ma_nx9,@tk_cpxt9,@px_gia_dd9,@thue_suat9,@thue_suat_nk9,@nk9,
    @nk_nt9,@thue_suat_ttdb9,@ttdb9,@ttdb_nt9,@tien_hang9,@tien_hang_nt9,
    
    @IsDel,@id_vt9,@ten_vt9,@id_dvt9,@id_kho9,@ten_kho9,@line_nbr9`;

    let result = "";
    let arr = s1.split(",");
    arr.filter((item, index) => {
        return item.trim().length > 0;
    }).map((item, index) => {
        let str = item.trim().replace("@","").replace("9","");
        if(item.indexOf("9") > 0)
            result += "\n"+str+" = @"+str+"9,";
        else
            result += "\n"+str+" = @"+str+",";
    });

    console.log(result);

}


})();

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 46 || charCode > 57)) {
        return false;
    }
    return true;
}

$('.decimal').keyup(function(){
    var val = $(this).val();
    if(isNaN(val)){
         val = val.replace(/[^0-9\.]/g,'');
         if(val.split('.').length>2) 
             val =val.replace(/\.+$/,"");
    }
    $(this).val(val); 
});

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function isNumberKey2(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return "";
}

function adjustSth() {

    //add scroll ảo
    jQuery(`<div id='scroll-box-vir' style='width: calc(100% - 54px * 2);height: auto;background-color: transparent; z-index: 99999;position: fixed;bottom: 0;left: 42px;overflow-x: scroll;overflow-y: hidden;'>
            <div class='scroll-ao' style='height: 1px;background-color: transparent;width: `+ document.querySelectorAll("div.modal-dialog div.table-scrollable")[0].scrollWidth+`px;'></div>
        </div>`).insertBefore("div.modal-dialog.modal-lg");

    //width của table dữ liệu thay đổi
    jQuery("div.modal-dialog.modal-lg div.dropdown-menu.hold-on-click.dropdown-checkboxes.pull-right div.mt-checkbox-list input[type='checkbox']")
        .change(() => {
            let tbl_data = document.querySelectorAll("div.modal-dialog div.table-scrollable");
            jQuery("#scroll-box-vir > div.scroll-ao").css({ "width": tbl_data[0].scrollWidth + "px" });
        });

    //điểu chỉnh scroll cho cả 2 khi có 1 trong 2 scroll thay đổi
    let src = document.querySelector("div.modal-dialog div.table-scrollable");
    let des = document.querySelector("#scroll-box-vir");
    function changeScroll(src, des, flag = true) {
        //thay đổi scroll cho tbl dữ liệu
        if (flag) {
            let left = src.scrollLeft;
            des.scrollLeft = left;
            return;
        }

        //thay đổi scroll cho scroll-aso
        let left = des.scrollLeft;
        src.scrollLeft = left;
    }
    jQuery(src).on("scroll", function () { changeScroll(src, des); });
    jQuery(des).on("scroll", function () { changeScroll(src, des, false); });

}

// Remove unicode to non-unicode
function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim(); 
    return str;
}

