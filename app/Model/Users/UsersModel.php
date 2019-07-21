<?php

namespace App\Model\Users;

use Illuminate\Database\Eloquent\Model;

class UsersModel extends Model
{
    //
    protected $table = 'users';

    function get_data($id) {
        $user = $this->where('id', $id);

        return $user->first();
    }

    function simpan($user_id, $request) {
        $input = $request->input();

        $user = $this;

        if( $user_id ) {
            $user = $this->find($user_id);
        }

        $user->name          = $input['name'];
        $user->brithday      = $input['brithday'];
        $user->address       = $input['address'];
        $user->description   = $input['description'];
        $user->website       = $input['website'];
        $user->email         = $input['email'];
        $user->phone         = $input['phone'];

        return $user->save();
    }
}
