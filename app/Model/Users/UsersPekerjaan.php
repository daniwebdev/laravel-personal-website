<?php

namespace App\Model\Users;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;


class UsersPekerjaan extends Model
{
    use \App\Model\Concerns\UsesUuid;

    protected $table = 'users_pekerjaan';

    function simpan($input) {
        
        $model = $this;

        if( isset($input['id']) ) {
            $model = $this->find($input['id']);
        }

        $model->posisi        = $input['posisi'];
        $model->company       = $input['company'];
        $model->description   = $input['description'];
        $model->start_at      = $input['start_at'];
        $model->end_at        = $input['end_at'];
        $model->user_id       = Auth::user()->id;

        return $model->save();
    }

}
