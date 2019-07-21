<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Model\Users\UsersModel;
use App\Model\Users\UsersSocmed;
use App\Model\Users\UsersPekerjaan;
use Illuminate\Support\Facades\Input;

class ProfileController extends Controller {
    //
    public $socmed;
    public $user;
    public $pekerjaan;

    public function __construct(UsersSocmed $socmed, UsersModel $user, UsersPekerjaan $pekerjaan) {

        $this->user      = $user;
        $this->socmed    = $socmed;
        $this->pekerjaan = $pekerjaan;
    }

    function index() {

        $user              = $this->user->get_data(Auth::user()->id);        
        $data['user']      = $user;
        $data['pekerjaan'] = $this->pekerjaan->where('user_id',  Auth::user()->id)->get();
        $data['socmed']    = $this->socmed->where('user_id',  Auth::user()->id)->get();
        return view('default.profile.index', $data);
    }

    function save(Request $request) {

        //Tidak di validasi jika update
        $config['name']      = 'required';
        $config['brithday']  = 'required';
        $config['address']   = 'required';
        $config['email']     = 'required';

        //Validatoin
        $validation = $request->validate($config);
        
        $save = $this->user->simpan( Auth::user()->id, $request );

        if($save) {
            return response()->json([
                'status'=> true
            ]);
        } else {
            return response()->json( array_merge($validation, ['status' => false] ) );
        }
    }

    function saveSocmed(Request $request) {

        $form_input     = $request->input('socmed');
        $incr           = 0;

        foreach($form_input as $input) {

            if($input['link'] != '') {
                
                $simpan = $this->socmed->simpan($input);
                
                if($simpan) {
                    $incr++;
                }
                
            }

        }

        $response['status']  = true;
        $response['message'] = '';

        return response()->json($response);
    }


    function savePekerjaan(Request $request) {

        $form_input     = $request->input('pekerjaan');
        $incr           = 0;

        foreach($form_input as $input) {

            if(!is_null($input['posisi']) && !is_null($input['company'])) {

                $simpan = $this->pekerjaan->simpan($input);
                
                if($simpan) {
                    $incr++;
                }
                
            }

        }


        $response['status']  = true;
        $response['message'] = $incr.' Data Pekerjaan disimpan.';

        return response()->json($response);

    }

    function delete(Request $request) {
        
        $type_delete = $request->type_delete;
        $id          = Input::get('id', true);

        $delete = $this->$type_delete->hapus($id);

        if($delete) {
            $out['status']  = true;
            $out['message'] = '';
        } else {
            $out['status']  = false;
            $out['message'] = '';
        }

        return response()->json($out);
    }
}
