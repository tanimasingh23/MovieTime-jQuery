$(document).ready(() => {

    $('#displaymovie').hide();

    $('#searchbtn').click((event) => {
        let title = $('#searchtitle').val();
        let year = $('#searchyear').val();
        let id = $('#searchid').val();
        if(year.length == 0 && id.length == 0 && title.length != 0)
        {
            searchbytitle(title);
        }
        else if(year.length != 0 && id.length == 0 && title.length == 0)
        {
            searchbyyear(title,year);
        }
        else if(year.length == 0 && id.length != 0 && title.length == 0)
        {
            searchbyid(id);
        }
        else 
        {
            alert("Please fill any one input field!");
        }        
        event.preventDefault();
    });
    $("#resetbtn").click((event)=>{  
       event.preventDefault();
    });
        
});

//Search movie by Title
function searchbytitle(title) {
      $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=fabdddc7'+'&t='+title, 
            success: (data) => {
                   console.log(data); 
                   let $err = $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>${data.Title}</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`);
                    $('#error').append($err);

                    if(data.Poster==null && data.Poster=="" && data.Poster==undefined)
                    {
                        $('#Poster').attr("src","dummy.jpg");
                    }
                    else 
                    {
                        $('#Poster').attr("src",data.Poster);
                    }                   
                    $('#Title').append("Title : ",data.Title);                   
                    $('#Year').append("Year : ",data.Year);
                    $('#Rated').append("Rated : ",data.Rated);
                    $('#Released').append("Released : ",data.Released);
                    $('#Runtime').append("Runtime : ",data.Runtime);
                    $('#Genre').append("Genre : ",data.Genre);
                    $('#Director').append("Director : ",data.Director);
                    $('#Writer').append("Writer : ",data.Writer);
                    $('#Actors').append("Actors : ",data.Actors);
                    $('#Plot').append("Plot : ",data.Plot);
                    $('#Language').append("Language : ",data.Language);
                    $('#Country').append("Country : ",data.Country);
                    $('#Awards').append("Awards : ",data.Awards);
                    $('#Ratings').append("Ratings : ");
                    let rating = data.Ratings;
                    for(let j=0;j<rating.length;j++)
                    {
                        for(i in rating[j])
                        {
                            $('#Ratings').append(`${i} : ${rating[j][i]}</br>`);
                            console.log(i);
                        }
                    }
                    $('#Metascore').append("Metascore : ",data.Metascore); 
                    $('#imdbRating').append("IMDBRating : ",data.imdbRating);
                    $('#imdbVotes').append("IMDBVotes : ",data.imdbVotes);
                    $('#imdbID').append("IMDB-id : ",data.imdbID); 
                    $('#Type').append("Type : ",data.Type);
                    $('#DVD').append("DVD : ",data.DVD);     
                    $('#BoxOffice').append("BoxOffice : ",data.BoxOffice);                
                    $('#Production').append("Production : ",data.Production);
                    $('#Website').append("Website : ",data.Website);
                    $('#Response').append("Response : ",data.Response);                                    
                    $('#displaymovie').show();           
            },
            error: (data) => { 
                alert("some error occured")
            },
            beforeSend: () => { 
                alert("Please wait....")
            },
            complete: () => {
                console.log("Success!")
            },
            timeout:3000
        }); // end of AJAX request
}

//Search Movie by Year
function searchbyyear(title,year) {
      $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=fabdddc7'+'&t='+title, 
            success: (data) => {               
                if(data.Year == year)
                {
                     let $err = $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>${data.Title}</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`);
                    $('#error').append($err);
                   console.log(data); 
                   if(data.Poster==null && data.Poster=="" && data.Poster==undefined)
                    {
                        $('#Poster').attr("src","dummy.jpg");
                    }
                    else 
                    {
                        $('#Poster').attr("src",data.Poster);
                    }
                   $('#Title').append("Title : ",data.Title);                   
                    $('#Year').append("Year : ",data.Year);
                    $('#Rated').append("Rated : ",data.Rated);
                    $('#Released').append("Released : ",data.Released);
                    $('#Runtime').append("Runtime : ",data.Runtime);
                    $('#Genre').append("Genre : ",data.Genre);
                    $('#Director').append("Director : ",data.Director);
                    $('#Writer').append("Writer : ",data.Writer);
                    $('#Actors').append("Actors : ",data.Actors);
                    $('#Plot').append("Plot : ",data.Plot);
                    $('#Language').append("Language : ",data.Language);
                    $('#Country').append("Country : ",data.Country);
                    $('#Awards').append("Awards : ",data.Awards);
                    $('#Ratings').append("Ratings : ");
                    let rating = data.Ratings;
                    for(let j=0;j<rating.length;j++)
                    {
                        for(i in rating[j])
                        {
                            $('#Ratings').append(`${i} : ${rating[j][i]}</br>`);
                            console.log(i);
                        }
                    }
                    $('#Metascore').append("Metascore : ",data.Metascore); 
                    $('#imdbRating').append("IMDBRating : ",data.imdbRating);
                    $('#imdbVotes').append("IMDBVotes : ",data.imdbVotes);
                    $('#imdbID').append("IMDB-id : ",data.imdbID); 
                    $('#Type').append("Type : ",data.Type);
                    $('#DVD').append("DVD : ",data.DVD);     
                    $('#BoxOffice').append("BoxOffice : ",data.BoxOffice);                
                    $('#Production').append("Production : ",data.Production);
                    $('#Website').append("Website : ",data.Website);
                    $('#Response').append("Response : ",data.Response);                                    
                    $('#displaymovie').show();           
                }
                else
                {
                    let $err = $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>Please enter valid year!</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`);
                    $('#error').append($err);
                }  
            },
            error: (data) => { 
                alert("some error occured")
            },
            beforeSend: () => { 
                alert("Please wait....")
            },
            complete: () => {
                console.log("Success!")
            },
            timeout:3000
        }); // end of AJAX request
}


//Search movie by ID 
function searchbyid(id) {
  
      $.ajax({
            type: 'GET', 
            dataType: 'json', 
            async: true,
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=fabdddc7'+'&i='+id, 
            success: (data) => { 
                   console.log(data); 
                    let $err = $(`<div class="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>${data.Title}</strong>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`);
                    $('#error').append($err);
                   if(data.Poster==null && data.Poster=="" && data.Poster==undefined)
                    {
                        $('#Poster').attr("src","dummy.jpg");
                    }
                    else 
                    {
                        $('#Poster').attr("src",data.Poster);
                    }
                   $('#Title').append("Title : ",data.Title);                   
                    $('#Year').append("Year : ",data.Year);
                    $('#Rated').append("Rated : ",data.Rated);
                    $('#Released').append("Released : ",data.Released);
                    $('#Runtime').append("Runtime : ",data.Runtime);
                    $('#Genre').append("Genre : ",data.Genre);
                    $('#Director').append("Director : ",data.Director);
                    $('#Writer').append("Writer : ",data.Writer);
                    $('#Actors').append("Actors : ",data.Actors);
                    $('#Plot').append("Plot : ",data.Plot);
                    $('#Language').append("Language : ",data.Language);
                    $('#Country').append("Country : ",data.Country);
                    $('#Awards').append("Awards : ",data.Awards);
                    $('#Ratings').append("Ratings : ");
                    let rating = data.Ratings;
                    for(let j=0;j<rating.length;j++)
                    {
                        for(i in rating[j])
                        {
                            $('#Ratings').append(`${i} : ${rating[j][i]}</br>`);
                            console.log(i);
                        }
                    }
                    $('#Metascore').append("Metascore : ",data.Metascore); 
                    $('#imdbRating').append("IMDBRating : ",data.imdbRating);
                    $('#imdbVotes').append("IMDBVotes : ",data.imdbVotes);
                    $('#imdbID').append("IMDB-id : ",data.imdbID); 
                    $('#Type').append("Type : ",data.Type);
                    $('#DVD').append("DVD : ",data.DVD);     
                    $('#BoxOffice').append("BoxOffice : ",data.BoxOffice);                
                    $('#Production').append("Production : ",data.Production);
                    $('#Website').append("Website : ",data.Website);
                    $('#Response').append("Response : ",data.Response);                                    
                    $('#displaymovie').show();           
            },
            error: (data) => { 
                alert("some error occured")
            },
            beforeSend: () => { 
                alert("Please wait....")
            },
            complete: () => {
                console.log("Success!")
            },
            timeout:3000
        }); // end of AJAX request
 }