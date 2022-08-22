@extends('_layouts.main')

@section('body')
    <h1 class="text-4xl font-bold font-sans mb-1">{{ $page->title }}</h1>
    <p class="mb-8">
        <span class="font-bold font-sans">Date:</span> {{ date('F j, Y', $page->date) }} <br/>
        <span class="font-bold font-sans">Reading time:</span> {{ $page->readingTime() }} <br/>
        {{-- <span class="font-bold font-sans">Views:</span> 0 --}}
    </p>

    <div class="content mb-10">
        @yield('content')
    </div>

@endsection
