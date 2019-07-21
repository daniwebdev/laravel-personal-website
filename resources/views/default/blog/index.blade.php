@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-8">
            
            @if (session('message'))
                <div class="alert alert-success">
                    {{ session('message') }}
                </div>
            @endif

            <div class="card">
                <div class="card-header">
                    Semua Artikel

                    <div class="float-right">
                        <a href="blog/add" class="btn btn-primary btn-sm">
                            <i class="mdi mdi-plus"></i> Buat Baru
                        </a>   
                    </div>
                </div>

                <div class="card-body">
@if (!count($posts))
    Tidak ada artikel.
@endif
                    <div class="row">
@foreach ($posts as $post)
                        {{-- {{dd($post)}} --}}
                        <div class="col-6 p-2">
                            <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">
                                    {{$post->title}}
                                </h5>
                                    {{-- <h6 class="card-subtitle mb-2 text-muted">Senin, 12 Januari 2019</h6> --}}
                                <h6 class="card-subtitle mb-2 text-muted">{{$post->created_at->format('D, d M Y H:i')}}</h6>
                                    <p class="card-text">
                                        {{ $post->description }}
                                    </p>
                                    <div class="float-right">
                                        <a class="float-right btn btn-danger text-white btn-sm " style="font-size: 12px">
                                            <i class="mdi mdi-delete"></i> Hapus
                                        </a>
    
                                        <a href="blog/edit/{{ $post->id }}" class="float-right btn btn-primary text-white btn-sm mr-1" style="font-size: 12px">
                                            <i class="mdi mdi-pencil"></i> Edit
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
@endforeach
                    </div>
                </div>
                <div class="card-footer">
                    <style>
                        .pagination {
                            justify-content: center;
                            margin: 0px;
                        }
                    </style>
                    <div class="row">
                        <div class="col-4">

                        </div>
                        <div class="col-4">
                            {{ $posts->links() }}
                        </div>
                        <div class="col-4">
                                <div class="float-right">
                                    Total : {{ $posts->total() }}       
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
