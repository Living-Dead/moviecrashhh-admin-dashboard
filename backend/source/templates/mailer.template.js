class mailerTemplate {

    createTemplate(mailData) {
        return `
			<div style="float: left;">
			<img style="width: 120px; height: 50px;" 
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Telenor_logo.png/800px-Telenor_logo.png">
			</div>
			<div style="display: inline-block; width: 100%; text-align: center">
				<h1> Cyber Open Space </h1>
				<h2> ${mailData.mailType} </h2>
			</div>
			<div style="display: inline-block; width: 100%">
			<span style="display: inline-block; width: 100%; font-size: 15px; margin: 15px; font-weight: bold; text-align: center;">
                ${mailData.title} </span>
			    <div style="width: 500px; margin: auto;">
			        <span style="display: inline-block; width: 100%; font-size: 15px; margin-bottom: 25px;"> ${mailData.message} </span>
			    </div>

			</div>

		   <div style="text-align: center; display: inline-block; width: 100%">
			   <a href="${process.env.DEPLOY_URL}content/${mailData.id}">
			        <div style="cursor: pointer;
			            font-size: 1rem;
			            line-height: 1.5;
			            font-weight: 400;
			            user-select: none;
			            text-align: center;
			            white-space: nowrap;
			            border-radius: .25rem;
			            display: inline-block;
			            -ms-user-select: none;
			            -moz-user-select: none;
			            vertical-align: middle;
			            padding: .375rem .75rem;
			            -webkit-user-select: none;
			            border: 1px solid transparent;
			            transition: color .15s ease-in-out,
			            background-color .15s ease-in-out,
			            border-color .15s ease-in-out,
			            box-shadow .15s ease-in-out;
			            color: #fff;
			            margin-left: 10px;
			            border-color: #106ebe;
			            background-color: #106ebe;"> Megnézem 
			        </div>
			    </a>
		    </div>`;
    }
}

module.exports = mailerTemplate;