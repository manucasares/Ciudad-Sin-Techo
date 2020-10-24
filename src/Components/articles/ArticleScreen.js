import React from 'react'

export const ArticleScreen = () => {

    return (
        <div className="article container">
            <h2 className="titulo mt-5">Lorem ipsum dolor sit amet</h2>

            <div className="fecha-autor d-flex-between">
                <p>19/10/2020</p>
                <p>Claudia Fernandez</p>
            </div>

            <p className="subtitulo">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel risus vitae odio vestibulum finibus. In et eros sagittis, pulvinar neque id, dictum elit. Pellentesque risus enim, sollicitudin sed neque ut, varius blandit est.
            </p>

            <img
                src={require(`../../assets/foto1.jpg`)}
                alt="foto1"
            />

            <p className="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id augue eget turpis feugiat eleifend. Aenean ut condimentum dui. Fusce gravida diam vitae nunc imperdiet, eget volutpat nunc congue. Cras felis libero, condimentum quis aliquet quis, interdum vitae est. Nam fermentum, quam sit amet accumsan dignissim, ex nisl mollis diam, vitae venenatis sapien dui non risus. Nunc in tortor pellentesque, efficitur ante porttitor, eleifend lacus. Nam at tempus metus. Donec a quam fermentum, interdum enim in, semper sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque bibendum ut justo efficitur lacinia. Mauris fringilla diam at enim hendrerit, vitae bibendum ante tristique. Aenean libero neque, posuere ut leo ac, auctor tincidunt mauris. Nulla iaculis quis augue at tempor. Aliquam quis diam et mi bibendum ornare. Proin quis nulla justo. Nullam id venenatis massa.

                Duis tempor velit vel diam iaculis scelerisque. Donec porttitor vestibulum metus ut mollis. Suspendisse eget porta metus. Suspendisse a metus at nisi convallis mollis. Suspendisse vehicula magna nec dolor mattis finibus. Nam gravida justo risus, quis hendrerit magna condimentum nec. Duis venenatis nulla quis ipsum congue volutpat. Aenean ut interdum massa, id pulvinar nunc. Nullam suscipit ex felis, eget sagittis magna ultrices non. In ut euismod sem. Integer at tempor nisl. Nunc et venenatis velit. Aliquam tortor mauris, tempus quis justo et, condimentum placerat velit. Duis laoreet neque non quam tempor finibus. Sed eu tellus tincidunt, interdum nulla non, ultricies ex. Proin at enim porttitor, interdum neque non, vehicula metus.

                Donec fringilla sapien ut convallis facilisis. Nullam ut accumsan neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sed nibh vel massa viverra porta. Curabitur dui dui, pulvinar sed viverra at, tempus non quam. Pellentesque ultrices tortor est, vitae fringilla quam porttitor id. Vivamus iaculis urna est, in bibendum eros congue nec. Nulla facilisis vehicula turpis, ac cursus odio lacinia id. Maecenas quis est a nisi sodales mollis eu eget quam. Ut quis feugiat quam. Donec rutrum mauris quis molestie aliquet. Vestibulum feugiat ante quis ipsum euismod, vitae hendrerit nisi vulputate. Aenean pulvinar aliquet massa a lacinia. 
            </p>
        </div>
    )
}
