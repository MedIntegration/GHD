document.write(
    `
    <style>
    #header{
        background: #ffffff;
        color: #000000;
    }
    </style>
    
    <section id="header">
    <nav class="navbar navbar-expand-lg navbar-$black bg-Info"">
        <div class="container-fluid">
            <a class="navbar-brand" href="home.html"><img src="../../mi.png" width="60" height="70"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Explore
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Datasets</a></li>
                    <li><a class="dropdown-item" href="#">Tools</a></li>
                    <li><a class="dropdown-item" href="#">Data Uses</a></li>
                    <li><a class="dropdown-item" href="#">Papers</a></li>
                    <li><a class="dropdown-item" href="#">Data Uses</a></li>
                    <li><a class="dropdown-item" href="#">Courses</a></li>
                    <li><a class="dropdown-item" href="#">Cohort discovery</a></li>
                    <li><a class="dropdown-item" href="#">Data Utility Wizzard</a></li>
                </ul>
                </li>

                <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Help
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">How to videos a guides</a></li>
                    <li><a class="dropdown-item" href="#">FAQs</a></li>
                    <li><a class="dropdown-item" href="#">Key terms Glossary</a></li>
                    <li><a class="dropdown-item" href="#">Data Access Request Process Overview</a></li>
                    <li><a class="dropdown-item" href="#">Health Data Science Training</a></li>
                    <li><a class="dropdown-item" href="#">Understanding Health Data Access</a></li>
                    <li><a class="dropdown-item" href="#">Contact us</a></li>
                </ul>
                </li>

                <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Usage Data
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">General Activiy</a></li>
                <li><a class="dropdown-item" href="#">National core Studies Dashboard</a></li>
                <li><a class="dropdown-item" href="#">Gateway Release</a></li></ul>

                <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About Us
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Our mission and pupose</a></li>
                    <li><a class="dropdown-item" href="#">For Researchers and Innovators</a></li>
                    <li><a class="dropdown-item" href="#">For Data Custodians</a></li>
                    <li><a class="dropdown-item" href="#">For Patients and the Public</a></li>
                    <li><a class="dropdown-item" href="#">National Core Studies</a></li>
                    <li><a class="dropdown-item" href="#">Get involved:Development and Improvement Group</a></li>
                </ul>
                </li>

                <li class="nav-item">
                <a class="nav-link active" href="#">News</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="#">Community</a>
                </li>
            </ul>


            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        </section>
        <section id="tabs">
        
        <nav style="background-color:#ffffff; margin: 1px 0;">
			<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
				<a class="nav-item nav-link" id="nav-datasets-tab" data-toggle="tab" role="tab" aria-controls="nav-datasets" aria-selected="true">datasets</a>
				<a class="nav-item nav-link" id="nav-tools-tab" data-toggle="tab" role="tab" aria-controls="nav-tools" aria-selected="false">tools</a>
				<a class="nav-item nav-link" id="nav-datauses-tab" data-toggle="tab" role="tab" aria-controls="nav-datauses" aria-selected="false">data uses</a>
				<a class="nav-item nav-link" id="nav-collections-tab" data-toggle="tab" role="tab" aria-controls="nav-collections" aria-selected="false">collections</a>
                <a class="nav-item nav-link" id="nav-courses-tab" data-toggle="tab" role="tab" aria-controls="nav-courses" aria-selected="false">courses</a>
                <a class="nav-item nav-link" id="nav-paper-tab" data-toggle="tab" role="tab" aria-controls="nav-paper" aria-selected="false">paper</a>
                <a class="nav-item nav-link" id="nav-people-tab" data-toggle="tab" role="tab" aria-controls="nav-people" aria-selected="false">people</a>
			</div>
		</nav>
        </section>`);