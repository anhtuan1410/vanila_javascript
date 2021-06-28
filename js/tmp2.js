angular.module('DpsCMSApp').controller('CNPhaiTra_PhieuNhapChiPhiMuaHangController',
    function ($rootScope, $scope, $state, $stateParams, $filter, $timeout, $ocLazyLoad,
        $uibModalInstance, $uibModal, dataitem,
        NgTableParams, SweetAlert, CNPhaiTra_PhieuNhapChiPhiMuaHangFactory) {

        //============== Some method for operato this modal =================
        $scope.modalTitle = "Phiêu nhập chi phí mùa hàng";
        $scope.cancel = function () { $uibModalInstance.dismiss('cancel'); }
        $scope.DataModel = jQuery.extend({
            MaPhieuSelected: "",
            ID_MaChungTu: 4,
            MaChungTu: "",
            TongSoLuongChiTiet: "0",
            TongTienChiTiet_Nt: "0",//tổng tiên theo nuyên tệ
            TongTienChiTiet: "0", //tổng tiền hàng của chi tiết
            TongTienChiPhi_Nt: "0",//tổng tiền chi phí  nguyên tệ
            TongTienChiPhi: "0",//tổng tiền chi phí sau nguyên tệ
            TongTienThueThue_Nt: "0",//tổng tiển thuế theo nguyên tệ
            TongTienThueThue: "0",//tổng tiền thuế sau nguyên tệ
            TongThanhToan_Nt: "0",//tổng thanh toán theo nguyên tệ
            TongThanhToan: "0",//tổng thanh toán sau nguyên tệ
            ChiTietMuaHang: [],
            ChiTietChiPhi: [],
            ChiTietThue: [],
            ActionPhanBo: false
        }, dataitem.action, dataitem.IDPhieu, dataitem);

        $scope.Lst_TrangThai = [{ id: 0, name: "Lập chứng từ" }, { id: 1, name: "Chuyển KTTH" }, { id: 2, name: "Chuyển vào SC" }, { id: 3, name: "Hủy hóa đơn" }];
        $scope.Lst_XuLy = [{ id: 0, name: "Lập chứng từ" }, { id: 1, name: "Chuyển KTTH" }, { id: 2, name: "Chuyển vào SC" }, { id: 3, name: "Hủy hóa đơn" }];
        //=========================================================================

        $uibModalInstance.opened.then(function () {

            window.setTimeout(function () {

                $scope.DataModel.TrangThai = $scope.DataModel.XuLy = 0;

                $('.modal-body .select2-ncc').select2(CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.select2Opt.LoadNhaCungCap());
                $('.modal-body .select2-tkc').select2(CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.select2Opt.LoadTaiKhoan());
                $('.modal-body .select2-giaodich').select2(CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.select2Opt.LoadGiaoDich());
                $('.modal-body .select2-tygia').select2(CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.select2Opt.LoadTyGia());
                $('.modal-body .select2-kho').select2(CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.select2Opt.LoadKho());
                $('.modal-body .select2-MaThue').select2(CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.select2Opt.LoadThue());
                $('.modal-body .select2-TkThue').select2(CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.select2Opt.LoadTaiKhoan());
                $('.modal-body .select2-MatHang').select2(CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.select2Opt.LoadHangHoa());
                $('.modal-body .select2-tkno').select2(CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.select2Opt.LoadTaiKhoan());
                $('.modal-body .select2-MaChiPhi').select2(CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.select2Opt.LoadChiPhi());

            });
        });

        $scope.bindNhaCungCap = function (kw) {
            CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.getObject.GetNhaCungCapById(kw).done(function (resNCC) {

                    if (resNCC && resNCC.success) {
                        $scope.DataModel.IdNCC = resNCC.data[0].id;
                        $scope.DataModel.TenNCC = resNCC.data[0].tenNCC;
                        $scope.DataModel.DiaChiNCC = resNCC.data[0].diaChiNCC;
                        //$scope.DataModel.MaSoThue = resNCC.data[0].msThue;

                        $scope.$digest();
                    }

               });
        }

       
       //======Lưu phiếu
    $scope.update = function(){
        
        CNPhaiTra_PhieuNhapChiPhiMuaHangFactory.Update($scope.DataModel).done(function (res){

            if(res && res.success)
{
if ($scope.DataModel.stt_rec) {
        var $toast = toastr["success"]("Lưu thành công", "Chi phí mua hàng");
                            $uibModalInstance.close({ action: 'saved' });
}
else {
                            var $toast = toastr["success"]("Thêm thành công", "Sample");
                            $uibModalInstance.close({ action: 'added', data: res.data });
                        }


} 

else

{
                        var $toast = toastr["error"](res.msg, "Chi phí mua hàng");
}
        }
        
    
    
    ).always(function () {
                    App.unblockUI('.modal-dialog');
                });;
    
    }





        });
