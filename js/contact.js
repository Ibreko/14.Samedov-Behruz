$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Ну давайте, у вас же есть имя, не так ли?",
                    minlength: "Имя должно состоять минимум из 2 символов"
                },
                subject: {
                    required: "Ну давайте, у вас же есть тема, не так ли?",
                    minlength: "Тема должна состоять минимум из 4 символов"
                },
                number: {
                    required: "Ну давайте, у вас же есть номер, не так ли?",
                    minlength: "Номер должен состоять минимум из 5 символов"
                },
                email: {
                    required: "Без электронной почты сообщение не отправить"
                },
                message: {
                    required: "Эм... да, вам нужно написать что-то, чтобы отправить эту форму.",
                    minlength: "Всё? Серьёзно?"
                }
            },
            
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})