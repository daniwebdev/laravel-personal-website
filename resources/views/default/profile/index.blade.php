@extends('layouts.app')

@push('styles')
    {{-- <link rel="stylesheet" href="{{ asset('plugins/datetimepicker/build/jquery.datetimepicker.min.css') }}"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('plugins/sweetalert2/dist/sweetalert2.css') }}"> --}}
@endpush

@section('content')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Profile</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-body text-center">
                                    <img src="https://www.w3schools.com/bootstrap4/paris.jpg" class="rounded" alt="Cinque Terre" style="width: 50%"> 
                                </div>
                                <div class="card-footer text-center">
                                    <button class="btn btn-primary btn-block">
                                        <i class="mdi mdi-upload"></i> Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="d-md-none mt-3"></div>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                        <i class="mdi mdi-account"></i> Profile
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="socmed-tab" data-toggle="tab" href="#socmed" role="tab" aria-controls="socmed" aria-selected="false">
                                        <i class="mdi mdi-share"></i> Social Media
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="skill-tab" data-toggle="tab" href="#skill" role="tab" aria-controls="skill" aria-selected="false">
                                        <i class="mdi mdi-chart-line"></i> Kemampuan
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pekerjaan-tab" data-toggle="tab" href="#pekerjaan" role="tab" aria-controls="pekerjaan" aria-selected="false">
                                        <i class="mdi mdi-briefcase"></i> Pekerjaan
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                        <i class="mdi mdi-school"></i> Pendidikan
                                    </a>
                                </li>
                            </ul>

                            <div class="tab-content" id="myTabContent">

                                <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                                
                                    <form id="form-profile" action="" class="mt-3">
                                            {{-- 'name', 'email', 'address', 'phone', 'description', 'website', 'brithday' --}}
                                        <div class="row">
                                            <div class="form-group col-6">
                                                <label for="name">Nama Lengkap</label>
                                                <input type="text" class="form-control" name="name" id="name" placeholder="" value="{{ $user->name }}">
                                                <small id="error_name" class="text-danger error"></small>

                                            </div>
                                            <div class="form-group col-6">
                                                <label for="brithday">Tanggal Lahir</label>
                                                <input type="text" class="form-control" value="{{ $user->brithday }}" name="brithday" id="brithday" placeholder="">
                                                <small id="error_brithday" class="text-danger error"></small>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="address">Alamat</label>
                                            <textarea type="text" class="form-control" name="address" id="address" placeholder="" rows="3">{{ $user->address }}</textarea>
                                            <small id="error_address" class="text-danger error"></small>
                                        </div>

                                        <div class="form-group">
                                            <label for="description">Tentang Kamu (Singkat)</label>
                                            <input autocomplete="off" type="text" class="form-control" value="{{ $user->description }}" name="description" id="description" placeholder="">
                                            <small id="error_description" class="text-danger error"></small>
                                        </div>

                                        <div class="form-group">
                                            <label for="website">Website</label>
                                            <input autocomplete="off" type="text" class="form-control" value="{{ $user->website }}" name="website" id="website" placeholder="Website">
                                            <small id="error_website" class="text-danger error"></small>
                                        </div>

                                        <div class="form-group">
                                            <label for="email">E-mail</label>
                                            <input autocomplete="off" type="text" class="form-control" value="{{ $user->email }}" name="email" id="email" placeholder="">
                                            <small id="error_email" class="text-danger error"></small>
                                        </div>

                                        <div class="form-group">
                                            <label for="phone">Kontak Pribadi (Telepon)</label>
                                            <input type="text" class="form-control" value="{{ $user->phone }}" name="phone" id="phone" placeholder="">
                                            <small id="error_phone" class="text-danger error"></small>
                                        </div>

                                        <button class="btn btn-primary"> <i class="mdi mdi-content-save"></i> Simpan Profile</button>
                                    </form>
                                </div><!-- End tab Profile -->

                                <div class="tab-pane fade" id="socmed" role="tabpanel" aria-labelledby="socmed-tab">
                                    <form class="mt-3" id="form-socmed">
                                        @if (!count($socmed))
                                            <span class="mute-text">Tidak ada link.</span>
                                        @endif
                                        <div class="row">
                                            @foreach ($socmed as $key => $item)
                                            <div class="col-md-6">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="icon mdi mdi-{{$item->label}}"></i>
                                                        </span>
                                                    </div>
                                                    <input class="link-id" name="socmed[{{$key}}][id]" value="{{$item->id}}" type="hidden">
                                                    <input value="{{$item->link}}" name="socmed[{{$key}}][link]" type="text" class="form-control link-socmed" placeholder="Link Akun Sosmed Anda.">
                                                    <input type="hidden" class="form-control link-label" name="socmed[{{$key}}][label]" value="{{$item->label}}" />
                                                    <div class="input-group-append">
                                                        <span class="btn btn-danger hapus_link">
                                                            <i class="icon mdi mdi-close-circle-outline"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            @endforeach
                                        </div>
                                    </form>
                                    <div class="btn-group mt-2">
                                        <button class="btn btn-secondary" id="add-link-socmed">
                                            <i class="mdi mdi-plus"></i> Tambah Link
                                        </button>
                                        <button class="btn btn-primary" id="save-socmed">
                                           <i class="mdi mdi-content-save"></i>  Simpan
                                        </button>
                                    </div>
                                </div> <!-- End tab socmed -->

                                <div class="tab-pane fade" id="pekerjaan" role="tabpanel" aria-labelledby="pekerjaan-tab">
                                    <form class="mt-3" id="form-pekerjaan">
                                        @if (!count($pekerjaan))
                                        <span class="mute-text">Belum ada riwayat.</span>
                                        @endif

                                        <div class="row items">

                                            @foreach ($pekerjaan as $index => $kerja)
                                            <div class="col-md-6 item-pekerjaan mb-2">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <button class="btn btn-danger btn-sm hapus-pekerjaan" style="position: absolute; right: 5px; top: 5px"><i class="mdi mdi-delete"></i></button>
                                                        <h5 class="card-title">
                                                            <input type="hidden" value="{{ $kerja->id }}" name="pekerjaan[{{ $index }}][id]" style="border: none; display: none; width: 100%">
                                                            <input value="{{ $kerja->posisi }}" name="pekerjaan[{{ $index }}][posisi]" style="border: none; display: none; width: 100%" placeholder="Posisi/Jabatan">
                                                            <span>{{ $kerja->posisi }}</span>
                                                        </h5>
                                                        <h6 class="card-subtitle mb-2 text-muted">
                                                            <input value="{{ $kerja->company }}"  name="pekerjaan[{{ $index }}][company]" style="border: none; display: none; width: 100%" placeholder="Nama Perusahaan">
                                                            <span>{{ $kerja->company }}</span>
                                                        </h6>
                                                        <p class="card-text">
                                                            <input value="{{ $kerja->description }}"  name="pekerjaan[{{ $index }}][description]" style="border: none; display: none; width: 100%" placeholder="Deskripsi">
                                                            <span>
                                                                {{ $kerja->description }}
                                                            </span>
                                                        </p>
                                                        <a href="#" class="card-link">Set Periode</a>
                                                        <div class="row set-periode" style="display: none">
                                                            <input value="{{ $kerja->start_at }}"  name="pekerjaan[{{ $index }}][start_at]" class="col-5 datepicker text-center" style="border: none" placeholder="Mulai" />
                                                            <input disabled class="col-2 text-center" value="s/d" style="border: none" />
                                                            <input value="{{ $kerja->end_at }}"  name="pekerjaan[{{ $index }}][end_at]" class="col-5 datepicker text-center" style="border: none" placeholder="Sekarang" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            @endforeach                                            

                                        </div>
                                    </form>
                                    <div class="btn-group mt-2">
                                        <button class="btn btn-secondary" id="add-pekerjaan">
                                            <i class="mdi mdi-plus"></i> Tambah Kemampuan
                                        </button>
                                        <button class="btn btn-primary" id="save-pekerjaan">
                                           <i class="mdi mdi-content-save"></i>  Simpan Pekerjaan
                                        </button>
                                    </div>
                                </div> <!-- End tab pekerjaan -->

                                <div class="tab-pane fade" id="skill" role="tabpanel" aria-labelledby="skill-tab">
                                    <form class="mt-3" id="form-skill">
                                        {{-- @if (!count($pekerjaan)) --}}
                                        <span class="mute-text">Belum ada riwayat.</span>
                                        {{-- @endif --}}
                                        <div class="row items">
                                            <div class="col-md-6">
                                                <div class="card">
                                                <div class="card-body">
                                                    <h4 class="card-title">Codding</h4>
                                                    <h6 class="card-subtitle text-muted">Subtitle</h6>
                                                    <br/>
                                                    <p class="card-text">Level</p>
                                                    <input class="level" placeholder="0" style="font-size: 18px; border: none; display: none"/>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="btn-group mt-2">
                                            <button class="btn btn-secondary" id="add-pekerjaan">
                                                <i class="mdi mdi-plus"></i> Tambah Kemampuan
                                            </button>
                                            <button class="btn btn-primary" id="save-pekerjaan">
                                                <i class="mdi mdi-content-save"></i>  Simpan Kemampuan
                                            </button>
                                        </div>
                                    </form>
                                </div> <!-- End tab Kemampuan -->

                            </div> <!-- End tab-content -->
                        </div>

                    </div>
                </div>
                {{-- <div class="card-footer">

                </div> --}}
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
    {{-- <script src="{{ asset('plugins/datetimepicker/build/jquery.datetimepicker.full.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('plugins/sweetalert2/dist/sweetalert2.js') }}"></script> --}}
    <script>
    $.datetimepicker.setLocale('id');
    jQuery('#brithday, .datepicker').each(function() {
        $(this).datetimepicker({
        // datepicker:false,
        timepicker:false,
        theme:'dark',
        format:'d-m-Y'
    });
    })
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name*="token"]').attr('content')
        }
    });


    $('#form-profile').find('button').click(function(e) {
        e.preventDefault();

        $('.error').text('');

        let form_data = $('#form-profile').serializeArray();
        $.post('/user/profile', form_data, res => {
            Swal.fire(
                'Success!',
                'Berhasil di simpan.',
                'success'
            )
        }).fail(error => {
            let errors = error.responseJSON.errors;
            console.log(errors)
            // errors.forEach((item, key) => {
            //     $('#error_'+key).text(item)
            // })

            for(let key in errors) {
                let error = errors[key]
                $('#error_'+key).text(error.join(''))
            }

            Swal.fire(
                'Error!',
                error.responseJSON.message,
                'error'
            )
        })
    })

    $('#add-pekerjaan').click(function() {
        
        $('.mute-text').hide();
        let index = $('.item-pekerjaan').toArray().length;

        let template = `
        <div class="col-md-6 item-pekerjaan mb-2">
            <div class="card">
                <div class="card-body">
                    <button class="btn btn-danger btn-sm hapus-pekerjaan" style="position: absolute; right: 5px; top: 5px"><i class="mdi mdi-delete"></i></button>
                    <h5 class="card-title">
                        <input name="pekerjaan[${index}][posisi]" style="border: none; display: none; width: 100%" placeholder="Posisi/Jabatan">
                        <span>Posisi/Jabatan</span>
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <input name="pekerjaan[${index}][company]" style="border: none; display: none; width: 100%" placeholder="Nama Perusahaan">
                        <span>Nama Perusahaan</span>
                    </h6>
                    <p class="card-text">
                        <input name="pekerjaan[${index}][description]" style="border: none; display: none; width: 100%" placeholder="Deskripsi">
                        <span>
                        Deskripsi
                        </span>
                    </p>
                    <a href="#" class="card-link">Set Periode</a>
                    <div class="row set-periode" style="display: none">
                        <input name="pekerjaan[${index}][start_at]" class="col-5 datepicker text-center" style="border: none" placeholder="Mulai" />
                        <input disabled class="col-2 text-center" value="s/d" style="border: none" />
                        <input name="pekerjaan[${index}][end_at]" class="col-5 datepicker text-center" style="border: none" placeholder="Sekarang" />
                    </div>
                </div>
            </div>
        </div>
        `;

        $('#form-pekerjaan .items').append(template);

        $('.datepicker').datetimepicker({
        // datepicker:false,
        timepicker:false,
        theme:'dark',
        format:'d-m-Y'
    });
    })

    $('#add-link-socmed').click(function() {
        
        $('.mute-text').hide();
        let index = $('.link-socmed').toArray().length;

        let template = `
            <div class="col-md-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="icon mdi mdi-link"></i>
                        </span>
                    </div>
                    <input name="socmed[${index}][link]" type="text" class="form-control link-socmed" placeholder="Link Akun Sosmed Anda.">
                    <input type="hidden" class="form-control link-label" name="socmed[${index}][label]" value=""/>
                    <div class="input-group-append">
                        <span class="btn btn-danger hapus_link">
                            <i class="icon mdi mdi-close-circle-outline"></i>
                        </span>
                    </div>
                </div>
            </div>
        `;

        $('#form-socmed .row').append(template)
    })

    $(document).on('click', '.card-link', function() {
        let parent =  $(this).closest('.card-body');
        $(this).hide();
        parent.find('.set-periode').slideDown(300);
    });

    $(document).on("keyup", '.link-socmed', function(e) {

        let value         = $(this).val();
        let icon          = 'icon mdi mdi-link';
        let label         = 'link';

        let matching = [
            {
                regex: /fb|facebook/,
                icon: 'mdi mdi-facebook-box',
                label: 'facebook'
            },
            {
                regex: /instagram/,
                icon: 'mdi mdi-instagram',
                label: 'instagram'
            },
            {
                regex: /whatsapp/,
                icon: 'mdi mdi-whatsapp',
                label: 'whatsapp'
            },
            {
                regex: /linked/,
                icon: 'mdi mdi-linkedin-box',
                label: 'linked'
            },
            {
                regex: /github/,
                icon: 'mdi mdi-github-circle',
                label: 'github'
            },
            {
                regex: /gitlab/,
                icon: 'mdi mdi-gitlab',
                label: 'gitlab'
            },
        ];

        matching.forEach(item => {
            if(value.match(item.regex)) {
                icon  = item.icon;
                label = item.label;
            }
        })

        $(this).parent().find('.input-group-text').html(`<i class="${icon}"></i>`)
        $(this).parent().find('.link-label').val(label);

    })

    $(document).on('click', '#save-socmed', function() {

        let formSocmed = $('#form-socmed').serializeArray();
        $.post(base_url('user/profile/socmed'), formSocmed, json => {
            json = JSON.parse(json);

            console.log(json)

        })
    });

    $(document).on("click", ".hapus_link, .hapus-pekerjaan", function() {

        let item = $(this).closest('.col-md-6');
        let check_id = item.find('input[name*="[id]"]').toArray().length;

        if(check_id) {
            swal.fire("Anda Yakin..?", "Hapus Link Ini", "question")
            .then(ok => {
                item.remove()    
            })
        } else {
            item.remove();
        }

        return false;
    })
    </script>
@endpush

@push('scripts')
    <script>
        $(document).on('click', '.card-title, .card-subtitle, .card-text', function() {

            $(this).find('span').hide();
            $(this).find('input').show().focus();
        })
        $(document).on('blur', '.card-title input, .card-subtitle input, .card-text input', function() {
            $(this).parent().find('span').show();
            $(this).hide();
        })
        $(document).on('keyup', '.card-title input, .card-subtitle input, .card-text input', function() {
            let value = $(this).val();
            if(value == '') {
                value = $(this).attr("placeholder");
            }
            $(this).parent().find('span').text(value);
        })

        $('#save-pekerjaan').click(function() {
            let formData = $('#form-pekerjaan').serializeArray();

            $.post(base_url('user/profile/pekerjaan'), formData, json => {
                json = JSON.parse(json);

                console.log(json)
            })
        })

        function hapus_socmed() {
            axios.get()
        }
    </script>

    <script>
        $('.progress').click(function() {
            $(this).parent().find('.level').show();
            $(this).hide();
        });

        $(document).on('change', '.level', function() {
            let val = $(this).val();
            $(this).parent().find('.progress').show()
            $(this).parent().find('.progress-bar').attr('style', 'width: '+val+'%;').text(val+'%');
            $(this).hide();
        })
    </script>
@endpush