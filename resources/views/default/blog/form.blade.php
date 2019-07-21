@extends('layouts.app')

@push('scripts')
    <!-- include summernote js -->
    {{-- <script src="{{ asset('plugins/summernote/dist/summernote-bs4.min.js') }}"></script> --}}

    {{-- <script src="{{ asset('plugins/datetimepicker/build/jquery.datetimepicker.full.min.js') }}"></script> --}}
    <script>
    $.datetimepicker.setLocale('id');
    jQuery('#date_publish').datetimepicker({
        // datepicker:false,
        // timepicker:false,
        // theme:'dark',
        format:'Y-m-d H:i:s'
    });
    $('#article').summernote({
        placeholder: 'Tulis artikel anda.',
        tabsize: 2,
        height: 300
    });
    $('#title').keyup(function() {
        let permalink = $(this).val().toLocaleLowerCase().replace(/\s/g, '-');
        $('#permalink').val(permalink)
    })
    </script>
@endpush

@push('styles')
    <!-- include summernote css -->
    {{-- <link rel="stylesheet" href="{{ asset('plugins/summernote/dist/summernote-bs4.css') }}" /> --}}
    {{-- <link rel="stylesheet" href="{{ asset('plugins/datetimepicker/build/jquery.datetimepicker.min.css') }}" /> --}}
@endpush

@section('content')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-8 col-sm-12">
            <div class="card">
                <div class="card-header">{{ isset($post) ? 'Update Artikel':'Tulis Artikel' }}</div>

                <div class="card-body">
                    <form action="/user/blog/save" method="post">
                        @csrf

                        @if ($id)
                            <input type="hidden" name="id" value="{{ $id }}" />
                        @endif

                        <div class="row">
                            <div class="form-group col-6">
                                <label for="title">Judul</label>
                                <input type="text" name="title" value="{{ isset($post) ? $post->title:'' }}" id="title" class="form-control" placeholder="Judul" aria-describedby="helpId">
                                @error('title')
                                <small id="helpId" class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="form-group col-6">
                                <label for="permalink">Permalink</label>
                                <input type="text" name="permalink" value="{{ isset($post) ? $post->permalink:'' }}" id="permalink" class="form-control" placeholder="Permalink" aria-describedby="helpId">
                                @error('permalink')
                                <small id="helpId" class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            
                        </div> <!-- End Row -->
                        
                        <div class="form-group">
                          <label for="article">Artikel</label>
                          <textarea class="form-control" name="article" id="article" rows="10">{{ isset($post) ? $post->article:'' }}</textarea>
                          @error('article')
                          <small id="helpId" class="text-danger">{{ $message }}</small>
                          @enderror
                        </div>

                        <div class="form-group">
                            <label for="description">Deskripsi</label>
                            <input type="text" name="description" value="{{ isset($post) ? $post->description:'' }}" id="description" class="form-control" placeholder="Description" aria-describedby="helpId">
                            @error('description')
                            <small id="helpId" class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>

                        <div class="row">
                            <div class="form-group col-6">
                            <label for="label">Label</label>
                            <input type="text" name="label" value="{{ isset($post) ? $post->label:'' }}" id="label" class="form-control" placeholder="Label" aria-describedby="helpId">
                            @error('label')
                                <small id="helpId" class="text-danger">{{ $message }}</small>
                            @enderror
                            </div>

                            <div class="form-group col-6">
                            <label for="date_publish">Publish</label>
                            <input type="text" name="date_publish" value="{{ isset($post) ? $post->date_publish:'' }}" id="date_publish" class="form-control" placeholder="Publish" aria-describedby="helpId">
                            @error('date_publish')
                                <small id="helpId" class="text-danger">{{ $message }}</small>
                            @enderror
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block">Simpan</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
