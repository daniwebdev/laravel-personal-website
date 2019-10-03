@extends('public.layouts.app')


@push('styles')
 <style>
    .single-post {
        margin-top: 50px;
        font-family: 'Open Sans', sans-serif;
    }

    .account-container {
        clear: both;
    }
    .account-container .image {
        float: left;
    }
    .account-container .image-content {
        float: left;
    }

    .account-container .image-content h3 {
        /* margin-top: 15px; */
    }
    .account-container .image-content h3 {
        /* margin-top: 10px; */
        font-size: 18px;
    }
    .body-post {
        margin-top: 20px
    }
 </style>   
@endpush


@section('content')
    
<div class="container">
    <div class="row">
        <div class="col-8">
            <div class="single-post">
                <div class="card text-left">
                  <div class="card-body">
                    <h2 class="card-title">Racing to Build the Starbucks of Weed</h2>
                    <div class="account-container">
                        <div class="image" style="width: 50px">
                            <img style="width: 100%" src="https://pickaface.net/gallery/avatar/InspireBuddy5290e4bdc07a4.png" class="rounded-circle" alt="Cinque Terre">
                        </div>
                        <div class="image-content ml-4">
                            <h3>Muhamad Yusup Hamdani</h3>
                            <small class="text-mute">Oct 3 · 14 min read</small>
                        </div>
                        <div class="clearfix"></div>
                    </div>
        
                    <div class="body-post">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente natus reiciendis impedit? Saepe, hic minus excepturi modi est quas vel doloremque dolor. Officia quibusdam unde itaque placeat! Maiores, facere? Cupiditate non, aut, doloremque molestias quas perferendis, obcaecati eius laudantium ipsam optio asperiores quia blanditiis mollitia temporibus? Accusantium nisi impedit iste consequuntur tenetur aspernatur distinctio sunt at atque temporibus officiis vero deserunt, assumenda exercitationem hic laudantium, repudiandae inventore! Ut animi, in rem vitae esse deleniti fugit cumque odit a, necessitatibus ipsa assumenda rerum, sequi aspernatur nisi! Quaerat molestiae eveniet delectus quas, necessitatibus praesentium laborum cumque quidem assumenda, tempore ab cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente natus reiciendis impedit? Saepe, hic minus excepturi modi est quas vel doloremque dolor. Officia quibusdam unde itaque placeat! Maiores, facere? Cupiditate non, aut, doloremque molestias quas perferendis, obcaecati eius laudantium ipsam optio asperiores quia blanditiis mollitia temporibus? Accusantium nisi impedit iste consequuntur tenetur aspernatur distinctio sunt at atque temporibus officiis vero deserunt, assumenda exercitationem hic laudantium, repudiandae inventore! Ut animi, in rem vitae esse deleniti fugit cumque odit a, necessitatibus ipsa assumenda rerum, sequi aspernatur nisi! Quaerat molestiae eveniet delectus quas, necessitatibus praesentium laborum cumque quidem assumenda, tempore ab cupiditate?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente natus reiciendis impedit? Saepe, hic minus excepturi modi est quas vel doloremque dolor. Officia quibusdam unde itaque placeat! Maiores, facere? Cupiditate non, aut, doloremque molestias quas perferendis, obcaecati eius laudantium ipsam optio asperiores quia blanditiis mollitia temporibus? Accusantium nisi impedit iste consequuntur tenetur aspernatur distinctio sunt at atque temporibus officiis vero deserunt, assumenda exercitationem hic laudantium, repudiandae inventore! Ut animi, in rem vitae esse deleniti fugit cumque odit a, necessitatibus ipsa assumenda rerum, sequi aspernatur nisi! Quaerat molestiae eveniet delectus quas, necessitatibus praesentium laborum cumque quidem assumenda, tempore ab cupiditate?
                    </div>
        
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection