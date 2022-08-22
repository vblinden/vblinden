@extends('_layouts.main', ['description' => true])

@section('body')
    <section class="mb-8">
        <h2 class="text-xl font-bold font-sans mb-3">Blog.</h2>
        <ul class="list-inside list-disc ml-6">
            @foreach ($posts->sortByDesc('date') as $post)
                <li>
                    <a href="{{ $post->getUrl() }}" class="text-blue-600 hover:text-blue-800">{{ $post->title }}</a>
                </li>
            @endforeach
        </ul>
    </section>

    <section class="mb-8">
        <h2 class="text-xl font-bold font-sans mb-3">Projects.</h2>
        <dl>
            <dt class="fw-normal">
                <a
                        href="https://checkeroni.com"
                        target="_blank"
                        rel="noreferrer"
                        class="text-blue-600 hover:text-blue-800"
                >
                    checkeroni.com
                </a>
            </dt>
            <dd>
                Super minimal, simple and inexpensive 24/7 uptime monitoring service. Create an account, add an url, and
                it
                will check it every couple of minutes. When the url is down, it will notify you via email, SMS or by
                pinging
                a webhook.
            </dd>

            <dt class="mt-3 fw-normal">
                <a
                        href="https://bin.vblinden.xyz"
                        target="_blank"
                        rel="noreferrer"
                        class="text-blue-600 hover:text-blue-800"
                >
                    bin.vblinden.xyz
                </a>
            </dt>
            <dd>
                Privbin is a online content-hosting service where users can store plain text publicly or privately for a
                specific duration. Client side encryption is optional.
            </dd>

            <dt class="mt-3 fw-normal">
                <a
                        href="https://drinkmorewater.app"
                        target="_blank"
                        rel="noreferrer"
                        class="text-blue-600 hover:text-blue-800"
                >
                    drinkmorewater.app
                </a>
            </dt>
            <dd>
                This app does what is says: Help you drink more water. You can configure the kind of glasses you drink
                from,
                the type of beverages you drink and easily keep track of your daily water intake.
            </dd>

            <dt class="mt-3 fw-normal">
                <a
                        href="https://nederboard.nl"
                        target="_blank"
                        rel="noreferrer"
                        class="text-blue-600 hover:text-blue-800"
                >
                    nederboard.nl
                </a>
            </dt>
            <dd>
                A soundboard with snippets from all kinds of different meme videos in the Netherlands. Including
                classics like: <a href="https://nederboard.nl/board/helemaalknettah" target="_blank" rel="noreferrer"
                                  class="text-blue-600 hover:text-blue-800">Helemaal knettah</a>, <a
                        href="https://nederboard.nl/board/rustahg" target="_blank" rel="noreferrer"
                        class="text-blue-600 hover:text-blue-800">Rustahg</a>, <a
                        href="https://nederboard.nl/board/mandje" target="_blank" rel="noreferrer"
                        class="text-blue-600 hover:text-blue-800">Mand</a> and many more!
            </dd>

            <dt class="mt-3 fw-normal">
                <a href="https://iloveitshipit.com" target="_blank" rel="noreferrer"
                   class="text-blue-600 hover:text-blue-800">iloveitshipit.com</a>
            </dt>
            <dd>
                Small soundboard of the legendary words spoken by
                <a href="https://www.hanselman.com/" target="_blank"
                   rel="noreferrer"
                   class="text-blue-600 hover:text-blue-800">
                    Scott Hanselman
                </a> during a .NET conference back in the day.
            </dd>

            <dt class="mt-3 fw-normal">
                <a href="https://lofi.vblinden.dev" target="_blank" rel="noreferrer"
                   class="text-blue-600 hover:text-blue-800">
                    lofi.vblinden.dev
                </a>
            </dt>
            <dd>An easy way to listen to different kind of LoFi music.</dd>
        </dl>
    </section>

    <section class="mb-8">
        <h2 class="text-xl font-bold font-sans mb-3">Contact.</h2>
        <p>You can reach me at blog [at] vblinden.dev.</p>
    </section>
@endsection
